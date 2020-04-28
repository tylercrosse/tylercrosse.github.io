import React from 'react'
import { graphql } from 'gatsby'
import { BlogPostQuery } from '../../graphql-types'
import Layout from '../components/Layout'

interface TemplateProps {
  readonly data: BlogPostQuery
}

const Template: React.FC<any> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="max-w-xl m-auto">
        <h1 className="text-4xl">{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
