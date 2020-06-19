import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from 'downshift'
import format from 'format-fuse.js'
import ThemeContext from '../../context/ThemeContext'
import Highlighter from './Highlighter'
import usePostSearch from './usePostSearch'

export interface SearchProps {
  closeModal?(): void
}

export default function Search({ closeModal }: SearchProps) {
  const { dark } = useContext(ThemeContext)
  const { flatPostData, postFuse } = usePostSearch()
  const [value] = useState()
  const [inputItems, setInputItems] = useState(flatPostData)
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    selectedItem: value,
    defaultHighlightedIndex: 0,
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      const postResults = postFuse.search(inputValue)
      const formattedPostResults = format(postResults)
      setInputItems(formattedPostResults)
    },
    stateReducer,
  })

  function stateReducer(
    state: UseComboboxState<T>,
    actionAndChanges: UseComboboxStateChangeOptions<I>
  ) {
    const { type, changes } = actionAndChanges
    switch (type) {
      case useCombobox.stateChangeTypes.InputKeyDownEnter:
      case useCombobox.stateChangeTypes.ItemClick:
        // onSelect, close the modal, reset the state and navigate
        closeModal && closeModal()
        navigate(changes.selectedItem.path)
        return {
          ...changes,
          isOpen: false,
          selectedItem: null,
          inputValue: '',
        }
      default:
        return changes // otherwise business as usual.
    }
  }

  function getHighlightedItemClass(index: number) {
    if (highlightedIndex === index) {
      return dark ? 'bg-theme-p2' : 'bg-blue-100'
    }
    return ''
  }

  return (
    <div
      className={`relative w-full rounded-lg ${
        dark ? 'themeDark' : 'themeLight'
      }`}
    >
      <div {...getComboboxProps()} className="relative">
        <input
          {...getInputProps()}
          className={`block w-full py-3 pl-10 pr-6 leading-normal border border-theme-p2 rounded-lg shadow-lg appearance-none text-theme-s8 placeholder-theme-s7 transition-width duration-100 ease-in-out z-0 ${
            dark ? 'bg-theme-p3' : 'bg-white'
          } focus:outline-0`}
          autoFocus={true}
          aria-label="search input"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-4 h-4 pointer-events-none fill-current text-theme-s8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul
          {...getMenuProps()}
          className={`z-10 absolute w-full overflow-hidden border border-transparent rounded-lg shadow-lg appearance-none ${
            dark ? 'bg-theme-p3 border-theme-p2' : 'bg-white'
          } focus:outline-0`}
        >
          {inputItems.map((item, index) => (
            <li
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              className={`p-4 bg-opacity-50 ${getHighlightedItemClass(index)}`}
            >
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
            </li>
          ))}
          {isOpen && inputItems.length === 0 ? (
            <li className="p-4 text-theme-s7">No results found</li>
          ) : null}
        </ul>
      )}
    </div>
  )
}
