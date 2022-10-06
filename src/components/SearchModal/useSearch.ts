import { useStaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import format, { FuseResults, CombinedResult } from './formatFuseResult'
import {
  Maybe,
  Mdx,
  MdxFrontmatter,
  MdxGroupConnection,
} from '../../../graphql-types'

export type ResultType = 'Ideas' | 'Tags'

type SearchQuery = {
  posts: {
    edges: Array<{
      node: Pick<Mdx, 'id'> & {
        frontmatter?: Maybe<
          Pick<
            MdxFrontmatter,
            'date' | 'description' | 'path' | 'tags' | 'title'
          >
        >
        headings?: {
          value: string
        }[]
        rawBody?: string
      }
    }>
  }
  tags: {
    group: Array<Pick<MdxGroupConnection, 'fieldValue' | 'totalCount'>>
  }
}
export interface IFormattedResult {
  text: string
  matches: boolean
}

export interface PostItem {
  resultType: ResultType
  description: string | null | undefined | IFormattedResult[]
  id: string
  path: string | null | undefined
  tags: string[] | null | undefined
  title: string | null | undefined | IFormattedResult[]
  headings: string[] | null | undefined
  rawBody: string | null | undefined | IFormattedResult[]
}

export interface TagItem {
  resultType: ResultType
  id: string
  tag: string | null | undefined | IFormattedResult[]
  path: string | null | undefined
}

export default function useSearch(): (query: string) => CombinedResult[] {
  const data: SearchQuery = useStaticQuery(graphql`
    query Search {
      posts: allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
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
            headings {
              value
            }
            rawBody
          }
        }
      }
      tags: allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const flatPostData = data.posts.edges.map(({ node }) => ({
    resultType: 'Ideas',
    description: node?.frontmatter?.description,
    id: node.id,
    path: node?.frontmatter?.path,
    tags: node?.frontmatter?.tags,
    title: node?.frontmatter?.title,
    headings: node.headings,
    rawBody: node.rawBody,
  }))
  const flatTagData = data.tags.group.map(node => ({
    resultType: 'Tags',
    id: node.fieldValue,
    tag: node.fieldValue,
    path: `/tags/${node.fieldValue}`,
  }))
  const postFuse = new Fuse(flatPostData, {
    keys: [
      {
        name: 'title',
        weight: 1,
      },
      {
        name: 'description',
        weight: 0.8,
      },
      {
        name: 'tags',
        weight: 0.8,
      },
      {
        name: 'headings.value',
        weight: 0.8,
      },
      {
        name: 'rawBody',
        weight: 0.4,
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
    const postResults = postFuse.search(query) as FuseResults<PostItem>
    const formattedPostResults = format(postResults)
    const tagResults = tagFuse.search(query) as FuseResults<TagItem>
    const formattedTagResults = format(tagResults)
    const combinedResults = formattedPostResults.concat(
      formattedTagResults
    ) as CombinedResult[]
    return combinedResults.sort((a, b) => a.score - b.score).slice(0, 6) // only return top 6 results;
  }
  return search
}
