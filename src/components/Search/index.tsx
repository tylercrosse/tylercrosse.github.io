import React, { useState, useContext } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import format from 'format-fuse.js'
import ThemeContext from '../../context/ThemeContext'

interface IFormattedResult {
  text: string
  matches: boolean
}
type FormattedResult<T> = T | IFormattedResult[]

export const Highlighter: React.FC<FormattedResult> = ({
  resultKey,
  highlightClasses,
}) => {
  console.log(resultKey)
  if (!Array.isArray(resultKey)) return resultKey
  return (
    <>
      {resultKey.map(({ matches, text }) =>
        matches ? <mark className={highlightClasses}>{text}</mark> : text
      )}
    </>
  )
}

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const { dark } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query SearchQuery {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            id
            frontmatter {
              date
              description
              path
              tags
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const flatPostData = data.allMarkdownRemark.edges.map(({ node }) => ({
    body: node.rawMarkdownBody,
    description: node.frontmatter.description,
    id: node.id,
    path: node.frontmatter.path,
    tags: node.frontmatter.tags,
    title: node.frontmatter.title,
  }))
  const postFuse = new Fuse(flatPostData, {
    keys: ['title', 'description', 'tags'],
    distance: 500,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  })

  const postResults =
    postFuse.search(searchText) || ([] as FuseResultWithMatches)
  const formattedPostResults = format(postResults)

  return (
    <div
      className={`relative w-full rounded-lg ${
        dark ? 'themeDark' : 'themeLight'
      }`}
    >
      <div className="relative">
        <input
          aria-autocomplete="list"
          aria-controls="autocomplete-results"
          aria-expanded={Boolean(searchText)}
          aria-label="search input"
          autoComplete="off"
          autoFocus={true}
          className={`block w-full py-3 pl-10 pr-6 leading-normal border border-theme-p2 rounded-lg shadow-lg appearance-none text-theme-s8 placeholder-theme-s7 transition-width duration-100 ease-in-out z-0 ${
            dark ? 'bg-theme-p3' : 'bg-white'
          } focus:outline-0`}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search"
          role="combobox"
          spellCheck="false"
          type="text"
          value={searchText}
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
      {searchText ? (
        <div
          className={`z-10 absolute w-full overflow-hidden border border-transparent rounded-lg shadow-lg appearance-none ${
            dark ? 'bg-theme-p3 border-theme-p2' : 'bg-white'
          } focus:outline-0`}
        >
          {formattedPostResults.map(result => (
            <Link to={result.path}>
              <div
                className={`p-4 bg-opacity-25 ${
                  dark
                    ? 'focus:bg-theme-p2 hover:bg-theme-p2'
                    : 'focus:bg-blue-100 hover:bg-blue-100'
                }`}
                id="autocomplete-results"
              >
                <div className="font-display text-theme-s9">
                  <Highlighter
                    resultKey={result.title}
                    highlightClasses={`${
                      dark ? 'text-sol-cyan' : 'text-sol-yellow'
                    } bg-theme-p6`}
                  />
                </div>
                <div className="font-body text-theme-s8">
                  <Highlighter
                    resultKey={result.description}
                    highlightClasses={`${
                      dark ? 'text-sol-cyan' : 'text-sol-yellow'
                    } font-bold bg-transparent`}
                  />
                </div>
              </div>
            </Link>
          ))}
          {searchText && postResults.length === 0 ? (
            <div className="p-4 text-theme-s7">No results found</div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Search
