import React from 'react'
import { IFormattedResult } from './useFuseSearch'

interface HighlighterProps {
  resultKey: string | undefined | null | IFormattedResult[]
  highlightClasses: string
}

const Highlighter = ({ resultKey, highlightClasses }: HighlighterProps) => {
  if (!Array.isArray(resultKey)) return <>{resultKey}</>
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
