import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { BlogPostQuery } from '../../graphql-types'
import Layout from '../components/Layout'
import ThemeContext from '../context/ThemeContext'

interface TemplateProps {
  readonly data: BlogPostQuery
}

const Template: React.FC<any> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { dark } = useContext(ThemeContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <Layout isWhite={!dark}>
      <main className={`relative pt-32 ${dark ? 'bg-sol-dark-4' : 'bg-white'}`}>
        <div className="max-w-3xl p-10 m-auto">
          <h1 className="text-5xl leading-tight font-display text-theme-s9">
            {frontmatter.title}
          </h1>
          <h2 className="pb-2 text-xl text-theme-s8 font-body">
            {frontmatter.description}
          </h2>
          <div className="text-gray-500 text-theme-s8 font-body">
            {frontmatter.date} - {timeToRead} min read
          </div>
          <div
            className="pt-8 text-xl text-theme-s8 blog-post-content font-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
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
