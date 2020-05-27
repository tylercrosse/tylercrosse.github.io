import React from 'react'
import { Link, graphql } from 'gatsby'
import capitalize from 'lodash/capitalize'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AllTags from '../components/AllTags'
import { BlogPostPreview } from '../components/BlogPosts'
import { TagQuery } from '../../graphql-types'

interface TagTemplateProps {
  readonly data: TagQuery
  readonly pageContext: {
    tag: string
  }
}

const Template: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  return (
    <>
      <SEO title={`Posts tagged with #${pageContext.tag}"`} />
      <Layout>
        <section className="max-w-screen-lg p-6 pt-12 mx-auto xl:pt-32">
          <div className="pt-4 pb-8">
            <Link
              className="p-2 pl-0 font-body text-theme-s7 focus:text-sol-blue hover:text-sol-blue"
              to="/tags"
            >
              Tags
            </Link>
            <span className="p-2 font-body text-theme-s7">/</span>
            <span className="p-2 font-body text-theme-s7">
              {capitalize(pageContext.tag)}
            </span>
          </div>
          <div className="text-xl font-display text-theme-s9">
            Posts tagged with #{pageContext.tag}
          </div>
          {data.allMarkdownRemark.edges.map(edge => (
            <BlogPostPreview node={edge.node} />
          ))}
        </section>
        <section className="max-w-screen-lg p-6 pt-0 mx-auto">
          <div className="text-xl font-display text-theme-s9">All Tags</div>
          <AllTags />
        </section>
      </Layout>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query Tag($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
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
`
