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
      <div className="max-w-xl m-auto">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.frontmatter.path}>
            <h2 className="text-lg">{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
            <div className="text-gray-500">
              {node.frontmatter.date} - {node.timeToRead} min read
            </div>
          </Link>
        ))}
      </div>
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
          }
        }
      }
    }
  }
`
