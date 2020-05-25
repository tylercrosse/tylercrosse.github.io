import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { BlogPostQuery } from '../../graphql-types'
import BlogPosts from '../components/BlogPosts'
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
        mainClasses={`pt-24 xl:pt-32 ${
          dark ? 'bg-sol-dark-4' : 'bg-white'
        } flex-grow`}
      >
        <section>
          <div className="max-w-2xl px-4 py-10 m-auto md:px-0">
            <h1 className="text-5xl leading-tight font-display text-theme-s9">
              {markdownRemark?.frontmatter?.title}
            </h1>
            <h2 className="pb-2 text-lg sm:text-xl text-theme-s8 font-body">
              {markdownRemark?.frontmatter?.description}
            </h2>
            <div className="text-gray-500 text-theme-s7 font-body">
              {markdownRemark?.frontmatter?.date} - {markdownRemark?.timeToRead}{' '}
              min read
            </div>
          </div>
          <div
            className="p-4 pt-0 text-lg sm:text-xl lg:p-10 text-theme-s8 blog-post-content font-body"
            dangerouslySetInnerHTML={{ __html: markdownRemark?.html || '' }}
          />
        </section>
        <section className="max-w-2xl px-4 pt-16 pb-10 mx-auto mt-10 border-t md:px-0 border-theme-p2">
          <div className="text-xl font-display text-theme-s9">Other Posts</div>
          <BlogPosts />
        </section>
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
