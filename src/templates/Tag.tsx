import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { BlogPostPreview } from '../components/BlogPosts'

interface TagTemplateProps {
  // readonly data: BlogPostQuery
}

const Template: React.FC<any> = ({ data, pageContext }) => {
  return (
    <>
      <SEO title={`Posts tagged with #${pageContext.tag}"`} />
      <Layout>
        <main className="relative py-10 bg-theme-p5">
          <section className="max-w-screen-lg p-6 pt-32 mx-auto">
            <div className="text-xl font-display text-theme-s9">
              Posts tagged with #{pageContext.tag}
            </div>
            {data.allMarkdownRemark.edges.map(edge => (
              <BlogPostPreview node={edge.node} />
            ))}
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query($tag: String) {
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
