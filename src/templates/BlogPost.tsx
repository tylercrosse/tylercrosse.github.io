import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { BlogPostQuery } from '../../graphql-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ThemeContext from '../context/ThemeContext'

interface BlogPostTemplateProps {
  readonly data: BlogPostQuery
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { dark } = useContext(ThemeContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  return (
    <>
      <SEO
        title={markdownRemark?.frontmatter?.title || ''}
        description={markdownRemark?.frontmatter?.description || ''}
      />
      <Layout
        isWhite={!dark}
        mainClasses={`pt-32 ${dark ? 'bg-sol-dark-4' : 'bg-white'} flex-grow`}
      >
        <div className="max-w-2xl py-10 m-auto">
          <h1 className="text-5xl leading-tight font-display text-theme-s9">
            {markdownRemark?.frontmatter?.title}
          </h1>
          <h2 className="pb-2 text-xl text-theme-s8 font-body">
            {markdownRemark?.frontmatter?.description}
          </h2>
          <div className="text-gray-500 text-theme-s7 font-body">
            {markdownRemark?.frontmatter?.date} - {markdownRemark?.timeToRead}{' '}
            min read
          </div>
        </div>
        <div
          className="p-10 pt-0 text-xl text-theme-s8 blog-post-content font-body"
          dangerouslySetInnerHTML={{ __html: markdownRemark?.html || '' }}
        />
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`
