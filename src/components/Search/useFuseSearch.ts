import { useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import { SearchQuery, Maybe } from '../../../graphql-types'

type ResultType = 'Blog Posts' | 'Tags'

export interface PostResult {
  resultType: ResultType
  description: string | null | undefined
  id: string
  path: string | null | undefined
  tags: Maybe<string>[] | null | undefined
  title: string | null | undefined
}

export interface TagResult {
  resultType: ResultType
  id: string
  tag: string | null | undefined
  path: string | null | undefined
}

export default function useFuseSearch() {
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
  return { flatPostData, flatTagData, postFuse, tagFuse }
}
