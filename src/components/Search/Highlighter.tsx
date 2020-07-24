import React from 'react'
import Fuse from 'fuse.js'

const Highlighter: React.FC<Fuse.FuseResult[]> = ({
  resultKey,
  highlightClasses,
}) => {
  if (!Array.isArray(resultKey)) return resultKey
  return (
    <>
      {resultKey.map(({ matches, text }) =>
        matches ? (
          <mark key={text} className={highlightClasses}>
            {text}
          </mark>
        ) : (
          text
        )
      )}
    </>
  )
}
export default Highlighter
