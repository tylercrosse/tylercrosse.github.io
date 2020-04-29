import React from 'react'
import { Link, graphql } from 'gatsby'
import { BlogIndexPageQuery } from '../../graphql-types'
import Layout from '../components/Layout'

interface BlogProps {
  readonly data: BlogIndexPageQuery
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-screen-lg p-6 pt-32 mx-auto">
        <h1 className="text-xl font-display">All Posts</h1>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="py-4 my-4 group" key={node.id}>
              <Link to={node.frontmatter?.path || '/blog'}>
                <h2 className="text-3xl group-hover:underline font-display">
                  {node.frontmatter?.title}
                </h2>
                <p className="pb-2 text-gray-700 font-body">
                  {node.frontmatter?.description}
                </p>
                <div className="text-gray-500 font-body">
                  {node.frontmatter?.date} - {node.timeToRead} min read
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Blog

export const query = graphql`
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
`
