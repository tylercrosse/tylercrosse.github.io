import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { AiOutlineTags, AiOutlineClockCircle } from 'react-icons/ai'
import TagPill from './TagPill'

interface IdeaPreviewProps {
  node: {
    id: string
    timeToRead?: number | null | undefined
    frontmatter?: {
      path: string
      title: string
      description: string
      date: string
      tags: string[]
    }
  }
}

export const IdeaPreview: React.FC<IdeaPreviewProps> = ({ node }) => (
  <div className="py-4 my-4">
    <div className="group">
      <Link to={node.frontmatter?.path || '/ideas'}>
        <h2 className="text-3xl focus:text-sol-blue group-hover:text-sol-blue font-display text-theme-s9">
          {node.frontmatter?.title}
        </h2>
        <p className="pb-2 font-body text-theme-s8 group-hover:text-sol-blue">
          {node.frontmatter?.description}
        </p>
        <div className="flex items-center w-full pb-2 font-body text-theme-s7">
          <AiOutlineClockCircle className="w-4 h-4 ml-1 mr-2" />
          {node.frontmatter?.date} - {node.timeToRead} min read
        </div>
      </Link>
    </div>
    <div className="flex flex-wrap items-center w-full">
      <Link
        to="/tags"
        className="mr-2 text-theme-s7 focus:text-sol-blue hover:text-sol-blue"
        aria-label="All Tags"
      >
        <AiOutlineTags className="w-5 h-5" />
      </Link>
      {node.frontmatter?.tags?.map(tag => (
        <TagPill tag={tag} key={tag} />
      ))}
    </div>
  </div>
)

interface IdeaPreviewsProps {
  limit?: number
  excludeId?: string | null
}

interface IdeasIndexPageQuery {
  allMdx: {
    edges: Array<{
      node: {
        id: string
        timeToRead?: number | null | undefined
        frontmatter?: {
          path: string
          title: string
          description: string
          date: string
          tags: string[]
        }
      }
    }>
  }
}

const IdeaPreviews: React.FC<IdeaPreviewsProps> = ({ limit, excludeId }) => {
  const data: IdeasIndexPageQuery = useStaticQuery(graphql`
    query IdeasIndexPage {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              description
              tags
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMdx
  const posts = limit
    ? edges.filter(edge => edge.node.id !== excludeId).slice(0, limit)
    : edges
  return (
    <>
      {posts.map(({ node }) => (
        <IdeaPreview node={node} key={node.id} />
      ))}
    </>
  )
}

export default IdeaPreviews
