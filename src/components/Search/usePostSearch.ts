import { useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import { SearchQuery } from '../../../graphql-types'

export default function usePostSearch() {
  const data: SearchQuery = useStaticQuery(graphql`
    query Search {
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
    description: node?.frontmatter?.description,
    id: node.id,
    path: node?.frontmatter?.path,
    tags: node?.frontmatter?.tags,
    title: node?.frontmatter?.title,
  }))
  const postFuse = new Fuse(flatPostData, {
    keys: ['title', 'description', 'tags'],
    distance: 500,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  })
  return { flatPostData, postFuse }
}
