import React from 'react'
import { UseComboboxGetItemPropsOptions } from 'downshift'
import { AiOutlineTag, AiOutlineRead } from 'react-icons/ai'
import Highlighter from './Highlighter'
import {
  CombinedResult,
  FormattedPostResult,
  FormattedTagResult,
} from './formatFuseResult'

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

interface ResultProps {
  item: CombinedResult
  index: number
  getItemProps: (options: UseComboboxGetItemPropsOptions<unknown>) => unknown
  highlightedIndex: number
  dark: boolean
}

const isPostResult = (result: CombinedResult): result is FormattedPostResult =>
  result.resultType === 'Blog Posts'
const isTagResult = (result: CombinedResult): result is FormattedTagResult =>
  result.resultType === 'Tags'

export default function Result({
  item,
  index,
  getItemProps,
  highlightedIndex,
  dark,
}: ResultProps): JSX.Element | null {
  if (isPostResult(item)) {
    return (
      <li
        key={`${item.id}-${index}`}
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
        key={`${item.id}-${index}`}
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
