import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  Maybe,
  MarkdownRemark,
  MarkdownRemarkFrontmatter,
} from '../../graphql-types'

interface BlogPostsProps {
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

const BlogPosts: React.FC<BlogPostsProps> = ({ limit }) => {
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
        <div className="py-4 my-4 group" key={node.id}>
          <Link to={node.frontmatter?.path || '/blog'}>
            <h2 className="text-3xl group-hover:underline font-display text-theme-s9">
              {node.frontmatter?.title}
            </h2>
            <p className="pb-2 text-gray-700 font-body text-theme-s8">
              {node.frontmatter?.description}
            </p>
            <div className="text-gray-500 font-body text-theme-s7">
              {node.frontmatter?.date} - {node.timeToRead} min read
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default BlogPosts
