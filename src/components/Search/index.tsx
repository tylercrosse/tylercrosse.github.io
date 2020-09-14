import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from 'downshift'
import format from 'format-fuse.js'
import ThemeContext from '../../context/ThemeContext'
import Results from './Results'
import useFuseSearch, { IResult } from './useFuseSearch'

export interface SearchProps {
  closeModal?(): void
}

export default function Search({ closeModal }: SearchProps) {
  const { dark } = useContext(ThemeContext)
  const { postFuse, tagFuse } = useFuseSearch()
  const [value] = useState()
  const [inputItems, setInputItems] = useState<IResult[]>([])
  const {
    isOpen,
    getLabelProps,
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
      if (typeof inputValue === 'string') {
        const postResults = postFuse.search(inputValue)
        const formattedPostResults = format(postResults) as IResult[]
        const tagResults = tagFuse.search(inputValue)
        const formattedTagResults = format(tagResults) as IResult[]
        const combinedResults = formattedPostResults.concat(formattedTagResults)
        if (Array.isArray(combinedResults)) setInputItems(combinedResults)
      }
    },
    stateReducer,
  })

  function stateReducer(
    state: UseComboboxState<any>,
    actionAndChanges: UseComboboxStateChangeOptions<any>
  ): UseComboboxState<any> {
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

  return (
    <div
      className={`relative w-full rounded-lg border shadow-lg border-theme-s7 ${
        dark ? 'themeDark' : 'themeLight'
      }`}
    >
      <div {...getComboboxProps()} className="relative">
        <label {...getLabelProps()} hidden>
          Search the site
        </label>
        <input
          {...getInputProps()}
          className={`block w-full py-3 pl-10 pr-6 ${
            isOpen ? 'border-b border-theme-s7' : 'rounded-b-lg'
          } leading-normal rounded-t-lg outline-none appearance-none text-theme-s8 placeholder-theme-s7 transition-width duration-100 ease-in-out z-0 ${
            dark ? 'bg-theme-p3' : 'bg-white'
          } focus:outline-0`}
          autoFocus={true}
          value={value}
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
      <ul
        {...getMenuProps()}
        className={`w-full overflow-hidden rounded-b-lg appearance-none ${
          dark ? 'bg-theme-p3' : 'bg-white'
        } focus:outline-0`}
      >
        {isOpen && (
          <>
            <Results
              inputItems={inputItems}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              dark={dark}
            />
            {isOpen && inputItems.length === 0 ? (
              <li className="p-4 text-theme-s7">No results found</li>
            ) : null}
          </>
        )}
      </ul>
    </div>
  )
}
