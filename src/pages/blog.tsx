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
      <main className="max-w-screen-lg p-6 mx-auto">
        <h1 className="">BLOG</h1>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="py-4 my-4 group">
              <Link to={node.frontmatter.path}>
                <h2 className="text-xl group-hover:text-blue-600">
                  {node.frontmatter.title}
                </h2>
                <p className="text-gray-600">{node.frontmatter.description}</p>
                <div className="text-gray-400">
                  {node.frontmatter.date} - {node.timeToRead} min read
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
