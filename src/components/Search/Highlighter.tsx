import React from 'react'

interface IFormattedResult {
  text: string
  matches: boolean
}
type FormattedResult<T> = T | IFormattedResult[]

const Highlighter: React.FC<FormattedResult> = ({
  resultKey,
  highlightClasses,
}) => {
  if (!Array.isArray(resultKey)) return resultKey
  return (
    <>
      {resultKey.map(({ matches, text }) =>
        matches ? <mark className={highlightClasses}>{text}</mark> : text
      )}
    </>
  )
}
export default Highlighter
