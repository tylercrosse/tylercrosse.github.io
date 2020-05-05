import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import kebabCase from 'lodash/kebabCase'

interface TagsProps {}

const Tags: React.FC<TagsProps> = ({ data }) => {
  const allTags = data.allMarkdownRemark.group

  return (
    <Layout>
      <section className="max-w-screen-lg p-6 pt-32 mx-auto">
        <div className="text-xl font-display text-theme-s9">All Tags</div>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: `none`,
                }}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
