import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { AiOutlineTags, AiOutlineClockCircle } from 'react-icons/ai'
import { BlogPostQuery } from '../../graphql-types'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagPill from '../components/TagPill'
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
        mainClasses={`pt-10 md:pt-16 lg:pt-24 xl:pt-32 ${
          dark ? 'bg-sol-dark-4' : 'bg-white'
        } flex-grow`}
      >
        <section>
          <div className="max-w-2xl px-4 pb-10 m-auto md:px-0">
            <h1 className="text-5xl leading-tight font-display text-theme-s9">
              {markdownRemark?.frontmatter?.title}
            </h1>
            <h2 className="pb-2 text-lg sm:text-xl text-theme-s8 font-body">
              {markdownRemark?.frontmatter?.description}
            </h2>
            <div className="flex items-center w-full pb-2 text-theme-s7 font-body">
              <AiOutlineClockCircle className="w-4 h-4 ml-1 mr-2" />
              {markdownRemark?.frontmatter?.date} - {markdownRemark?.timeToRead}{' '}
              min read
            </div>
            <div className="flex flex-wrap items-center w-full">
              <Link
                to="/tags"
                className="mr-2 text-theme-s7 focus:text-sol-blue hover:text-sol-blue"
                aria-label="All Tags"
              >
                <AiOutlineTags className="w-5 h-5" />
              </Link>
              {markdownRemark?.frontmatter?.tags?.map(tag => {
                if (typeof tag === 'string') {
                  return <TagPill tag={tag} key={tag} />
                }
              })}
            </div>
          </div>
          <div
            className="p-4 pt-0 text-lg sm:text-xl lg:p-10 text-theme-s8 blog-post-content font-body"
            dangerouslySetInnerHTML={{ __html: markdownRemark?.html || '' }}
          />
        </section>
        <section className="max-w-2xl px-4 pt-16 pb-10 mx-auto mt-10 border-t md:px-0 border-theme-p2">
          <div className="text-xl font-display text-theme-s9">Other Posts</div>
          <BlogPosts limit={2} excludeId={markdownRemark?.id} />
          <Link
            to="/blog"
            className="font-body text-theme-s9 focus:text-sol-blue hover:text-sol-blue"
          >
            See More
          </Link>
        </section>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
`
