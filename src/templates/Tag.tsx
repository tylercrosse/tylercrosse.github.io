import React from 'react'
import { graphql } from 'gatsby'
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
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0 md:pt-24 xl:pt-32">
          <h1 className="text-xl font-display text-theme-s9">
            Posts tagged with #{pageContext.tag}
          </h1>
          {data.allMarkdownRemark.edges.map(edge => (
            <BlogPostPreview node={edge.node} />
          ))}
        </section>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0">
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
