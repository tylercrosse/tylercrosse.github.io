import React from 'react'
import { IFormattedResult } from './useSearch'

interface HighlighterProps {
  resultKey: string | undefined | null | IFormattedResult[]
  highlightClasses: string
}

const Highlighter = ({
  resultKey,
  highlightClasses,
}: HighlighterProps): JSX.Element => {
  if (!Array.isArray(resultKey)) return <>{resultKey}</>
  return (
    <>
      {resultKey.map(({ matches, text }, index) =>
        matches ? (
          <mark key={`${text}-${index}`} className={highlightClasses}>
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
