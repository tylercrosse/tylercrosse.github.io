import set from 'set-value'
import partitionStringIndices from './partitionStringIndices'

// Denotes the start/end indices of a match
//                 start    end
//                   ↓       ↓
type RangeTuple = [number, number]

export type FuseResultMatch = {
  indices: Array<RangeTuple>
  key: string
  refIndex: number
  value: string
}

export type FuseResult<T> = {
  item: T
  matches: Array<FuseResultMatch>
  refIndex: number
  score: number
}

export type FuseResults<T> = Array<FuseResult<T>>

export interface IFormattedResult {
  text: string
  matches: boolean
}

export interface IFormatted {
  [key: string]: IFormattedResult[]
}

export type FormattedResults<T> = (T | IFormatted)[]

export type ResultType = 'Blog Posts' | 'Tags'

export interface FormattedPostResult {
  resultType: ResultType
  description?: string | null | undefined | IFormattedResult[]
  id?: string
  path?: string | null | undefined
  tags?: string[] | null | undefined
  title?: string | null | undefined | IFormattedResult[]
  headings?: string[] | null | undefined
  rawMarkdownBody?: string | null | undefined | IFormattedResult[]
  score: number
}

export interface FormattedTagResult {
  resultType: ResultType
  id?: string
  tag?: string | null | undefined | IFormattedResult[]
  path?: string | null | undefined
  score: number
}

export type CombinedResult = FormattedPostResult | FormattedTagResult

/**
 * Allows for easier display of highlighted matches
 *
 * Adapted from [format-fuse.js by metonym](https://github.com/metonym/format-fuse.js)
 * @param results
 * @returns
 */
export default function formatFuseResult<T>(
  results: FuseResults<T>
): CombinedResult[] {
  const matched: any[] = []

  results.forEach(({ item, matches, score }, index) => {
    matched.push({ ...item, score })
    matches?.forEach(({ indices, key, value }) => {
      const output = partitionStringIndices(value, indices, data => ({
        text: data.chars,
        matches: data.matches,
      }))
      const formattedResult = output.matched
      const match = matched[index] as CombinedResult

      set(match, key, formattedResult)
    })
  })

  return matched
}
