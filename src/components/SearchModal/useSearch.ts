import { useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import format from 'format-fuse.js'
import { SearchQuery, Maybe } from '../../../graphql-types'

export type ResultType = 'Blog Posts' | 'Tags'

export interface IFormattedResult {
  text: string
  matches: boolean
}

export interface PostResult {
  resultType: ResultType
  description: string | null | undefined | IFormattedResult[]
  id: string
  path: string | null | undefined
  tags: Maybe<string>[] | null | undefined
  title: string | null | undefined | IFormattedResult[]
}

export interface TagResult {
  resultType: ResultType
  id: string
  tag: string | null | undefined | IFormattedResult[]
  path: string | null | undefined
}

export type IResult = PostResult | TagResult

export default function useSearch() {
  const data: SearchQuery = useStaticQuery(graphql`
    query Search {
      posts: allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
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
          }
        }
      }
      tags: allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const flatPostData = data.posts.edges.map(({ node }) => ({
    resultType: 'Blog Posts',
    description: node?.frontmatter?.description,
    id: node.id,
    path: node?.frontmatter?.path,
    tags: node?.frontmatter?.tags,
    title: node?.frontmatter?.title,
  }))
  const flatTagData = data.tags.group.map(node => ({
    resultType: 'Tags',
    id: node.fieldValue,
    tag: node.fieldValue,
    path: `tags/${node.fieldValue}`,
  }))
  const postFuse = new Fuse(flatPostData, {
    keys: [
      {
        name: 'title',
        weight: 2,
      },
      {
        name: 'description',
        weight: 2,
      },
      {
        name: 'tags',
        weight: 2,
      },
    ],
    distance: 500,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  })
  const tagFuse = new Fuse(flatTagData, {
    keys: ['tag'],
    distance: 100,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  })
  function search(query: string) {
    const postResults = postFuse.search(query).slice(0, 3) // top 3 posts
    const formattedPostResults = format(postResults) as IResult[]
    const tagResults = tagFuse.search(query).slice(0, 3) // top 3 tags
    const formattedTagResults = format(tagResults) as IResult[]
    return formattedPostResults.concat(formattedTagResults)
  }
  return search
}
