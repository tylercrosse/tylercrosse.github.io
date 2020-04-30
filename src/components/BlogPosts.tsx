import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  Maybe,
  MarkdownRemark,
  MarkdownRemarkFrontmatter,
} from '../../graphql-types'

interface BlogPostsProps {}

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

const BlogPosts: React.FC<BlogPostsProps> = () => {
  const data: BlogIndexPageQuery = useStaticQuery(graphql`
    query BlogIndexPage {
      allMarkdownRemark {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              date
              path
              title
              description
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="py-4 my-4 group" key={node.id}>
          <Link to={node.frontmatter?.path || '/blog'}>
            <h2 className="text-3xl group-hover:underline font-display text-theme-s9">
              {node.frontmatter?.title}
            </h2>
            <p className="pb-2 text-gray-700 font-body text-theme-s8">
              {node.frontmatter?.description}
            </p>
            <div className="text-gray-500 font-body text-theme-s8">
              {node.frontmatter?.date} - {node.timeToRead} min read
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default BlogPosts
