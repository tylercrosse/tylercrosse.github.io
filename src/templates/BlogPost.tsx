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
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <Layout>
      <main className="max-w-3xl p-10 pt-32 m-auto">
        <h1 className="text-5xl leading-tight font-display">
          {frontmatter.title}
        </h1>
        <h2 className="pb-2 text-xl text-gray-700 font-body">
          {frontmatter.description}
        </h2>
        <div className="text-gray-500 font-body">
          {frontmatter.date} - {timeToRead} min read
        </div>
        <div
          className="pt-8 text-xl text-gray-700 blog-post-content font-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date
        path
        title
        description
      }
    }
  }
`
