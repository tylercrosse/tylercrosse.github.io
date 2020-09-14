import React from 'react'
import { UseComboboxGetItemPropsOptions } from 'downshift'
import { AiOutlineTag, AiOutlineRead } from 'react-icons/ai'
import Highlighter from './Highlighter'
import { IResult, PostResult, TagResult } from './useFuseSearch'

export function getHighlightedItemClass(
  highlightedIndex: number,
  index: number,
  dark: boolean
): string {
  if (highlightedIndex === index) {
    return dark ? 'bg-theme-p2' : 'bg-blue-100'
  }
  return ''
}

interface ResultsProps {
  inputItems: IResult[]
  getItemProps: (options: UseComboboxGetItemPropsOptions<any>) => any
  highlightedIndex: number
  dark: boolean
}

interface ResultProps {
  item: IResult
  index: number
  getItemProps: (options: UseComboboxGetItemPropsOptions<any>) => any
  highlightedIndex: number
  dark: boolean
}

const isPostResult = (result: IResult): result is PostResult =>
  result.resultType === 'Blog Posts'
const isTagResult = (result: IResult): result is TagResult =>
  result.resultType === 'Tags'

function Result({
  item,
  index,
  getItemProps,
  highlightedIndex,
  dark,
}: ResultProps) {
  if (isPostResult(item)) {
    return (
      <li
        key={item.id}
        {...getItemProps({ item, index })}
        className={`px-4 py-2 md:p-4 bg-opacity-50 ${getHighlightedItemClass(
          highlightedIndex,
          index,
          dark
        )}`}
      >
        <div className="flex flex-wrap items-center">
          <AiOutlineRead className="hidden w-5 h-5 mr-4 md:block text-theme-s7" />
          <div>
            <div className="font-display text-theme-s9">
              <Highlighter
                resultKey={item.title}
                highlightClasses={`${
                  dark ? 'text-sol-cyan' : 'text-sol-blue'
                } bg-transparent`}
              />
            </div>
            <div className="font-body text-theme-s8">
              <Highlighter
                resultKey={item.description}
                highlightClasses={`${
                  dark ? 'text-sol-cyan' : 'text-sol-blue'
                } font-bold bg-transparent`}
              />
            </div>
          </div>
        </div>
      </li>
    )
  }
  if (isTagResult(item)) {
    return (
      <li
        key={item.id}
        {...getItemProps({ item, index })}
        className={`px-4 py-2 md:p-4 bg-opacity-50 ${getHighlightedItemClass(
          highlightedIndex,
          index,
          dark
        )}`}
      >
        <div className="flex flex-wrap items-center">
          <AiOutlineTag className="hidden w-5 h-5 mr-4 md:block text-theme-s7" />
          <div className="font-body text-theme-s9">
            #
            <Highlighter
              resultKey={item.tag}
              highlightClasses={`${
                dark ? 'text-sol-cyan' : 'text-sol-blue'
              } font-bold bg-transparent`}
            />
          </div>
        </div>
      </li>
    )
  }
  return null
}

export default function Results({
  inputItems,
  getItemProps,
  highlightedIndex,
  dark,
}: ResultsProps) {
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
