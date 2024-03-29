import React from 'react'
import { UseComboboxGetItemPropsOptions } from 'downshift'
import Result from './Result'
import { CombinedResult } from './formatFuseResult'

interface ResultsProps {
  inputItems: CombinedResult[]
  getItemProps: (options: UseComboboxGetItemPropsOptions<unknown>) => unknown
  highlightedIndex: number
  dark: boolean
}

export default function Results({
  inputItems,
  getItemProps,
  highlightedIndex,
  dark,
}: ResultsProps): JSX.Element {
  const RenderedItems = []
  let currentResultType = ''
  for (let i = 0; i < inputItems.length; i++) {
    if (inputItems[i].resultType !== currentResultType) {
      RenderedItems.push(
        <>
          <div className="px-4 py-1 text-xs font-body text-theme-s8">
            {inputItems[i].resultType}
          </div>
          <Result
            item={inputItems[i]}
            index={i}
            key={`${i}-${inputItems[i].id}`}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            dark={dark}
          />
        </>
      )
    } else {
      RenderedItems.push(
        <Result
          item={inputItems[i]}
          index={i}
          key={`${i}-${inputItems[i].id}`}
          getItemProps={getItemProps}
          highlightedIndex={highlightedIndex}
          dark={dark}
        />
      )
    }
    currentResultType = inputItems[i].resultType
  }
  return <>{RenderedItems}</>
}
