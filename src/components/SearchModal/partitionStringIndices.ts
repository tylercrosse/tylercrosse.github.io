// Denotes the start/end indices of a match
//                 start    end
//                   ↓       ↓
type RangeTuple = [number, number]

interface INonmatched {
  chars: string
  index: number
}

type PartitionStringIndices<T> = {
  unmatched: INonmatched[]
  matched: T[] | string[]
}

/**
 * Partitions a string based on character indices.
 *
 * Adapted from [strind by metonym](https://github.com/metonym/strind)
 * @param {string} str - string to partition
 * @param {[number,number][]} indices - array of tuples to match [start, end] indices
 * @param {function} callback - callback function called with matching characters
 */
export default function partitionStringIndices<T = string>(
  str: string,
  indices: RangeTuple[] | RangeTuple,
  callback?: (params: { chars: string; matches: boolean }) => T
): PartitionStringIndices<T> {
  const strs = str.split('')
  const strsLen = strs.length
  const idx = Array.isArray(indices[0]) ? indices : [indices]
  const partition: T[] | string[] = []
  const nonmatched: INonmatched[] = []

  function updateNonmatched(open: number, close: number, index: number) {
    const chars = str.slice(open, close)

    if (!chars.length) {
      return
    }

    nonmatched.push({ chars, index })

    if (callback) {
      const cb = callback({ chars, matches: false })
      ;(partition as T[]).push(cb)
    }
  }

  for (let i = 0, len = idx.length; i < len; i++) {
    const [start, end] = idx[i] as RangeTuple
    const floor = start >= 0 ? start : 0
    const ceiling = end >= strsLen ? strsLen : end + 1

    if (i === 0 && start > 0) {
      updateNonmatched(0, start, 0)
    }

    const chars = str.slice(floor, ceiling)

    if (callback) {
      const cb = callback({ chars, matches: true })
      ;(partition as T[]).push(cb)
    } else {
      (partition as string[]).push(chars)
    }

    if (end < strsLen) {
      const open = end + 1
      const close = i < len - 1 ? (idx[i + 1] as RangeTuple)[0] : strsLen
      updateNonmatched(open, close, partition.length)
    }

    if (end >= strsLen) {
      break
    }
  }

  return {
    unmatched: nonmatched,
    matched: partition,
  }
}
