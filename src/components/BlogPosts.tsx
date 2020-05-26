import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  Maybe,
  MarkdownRemark,
  MarkdownRemarkFrontmatter,
} from '../../graphql-types'

interface BlogPostPreviewProps {
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

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ node }) => (
  <div className="py-4 my-4 group" key={node.id}>
    <Link to={node.frontmatter?.path || '/blog'}>
      <h2 className="text-3xl group-hover:underline font-display text-theme-s9">
        {node.frontmatter?.title}
      </h2>
      <p className="pb-2 font-body text-theme-s8">
        {node.frontmatter?.description}
      </p>
      <div className="font-body text-theme-s7">
        {node.frontmatter?.date} - {node.timeToRead} min read
      </div>
      <div className="mt-2">
        {node.frontmatter?.tags?.map(tag => (
          <span className="px-3 py-1 mr-2 text-xs rounded-full bg-theme-s7 text-theme-p9">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  </div>
)

interface BlogPostPreviewsProps {
  limit?: number
}

interface BlogIndexPageQuery {
  allMarkdownRemark: {
    edges: Array<{
      node: Pick<MarkdownRemark, 'id' | 'timeToRead'> & {
        frontmatter?: Maybe<
          Pick<
            MarkdownRemarkFrontmatter,
            'date' | 'path' | 'title' | 'description'
          >
        >
      }
    }>
  }
}

const BlogPostPreviews: React.FC<BlogPostPreviewsProps> = ({ limit }) => {
  const data: BlogIndexPageQuery = useStaticQuery(graphql`
    query BlogIndexPage {
      allMarkdownRemark(
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
  const { edges } = data.allMarkdownRemark
  const posts = limit ? edges.slice(0, limit - 1) : edges
  return (
    <>
      {posts.map(({ node }) => (
        <BlogPostPreview node={node} />
      ))}
    </>
  )
}

export default BlogPostPreviews
