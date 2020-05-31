import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import format from 'format-fuse.js'

interface IFormattedResult {
  text: string
  matches: boolean
}
type FormattedResult<T> = T | IFormattedResult[]

export const Highlighter: React.FC<FormattedResult<T>> = ({
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
  const data = useStaticQuery(graphql`
    query SearchQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              description
              tags
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const flatPostData = data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    tags: node.frontmatter.tags,
    body: node.rawMarkdownBody,
  }))
  const postFuse = new Fuse(flatPostData, {
    keys: ['title', 'description', 'tags'],
    distance: 500,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.4,
  })

  const postResults =
    postFuse.search(searchText) || ([] as FuseResultWithMatches)
  const formattedPostResults = format(postResults)

  console.log(postResults, formattedPostResults)

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      {formattedPostResults.map(result => (
        <div className="my-4">
          <div className="font-display text-theme-s9">
            <Highlighter
              resultKey={result.title}
              highlightClasses="underline bg-transparent"
            />
          </div>
          <div className="font-body text-theme-s8">
            <Highlighter
              resultKey={result.description}
              highlightClasses="font-bold bg-transparent"
            />
          </div>
        </div>
      ))}
      {searchText && postResults.length === 0 ? (
        <div className="my-4">No results found</div>
      ) : null}
    </div>
  )
}

export default Search
