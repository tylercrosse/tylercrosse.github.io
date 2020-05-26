import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPosts from '../components/BlogPosts'

interface IndexProps {
  data: IndexPageQuery
}

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <section className="max-w-screen-xl p-6 pt-16 mx-auto lg:pt-64 lg:flex">
          <div className="py-10 lg:pr-8 lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-display text-theme-s9">
              Hi, I'm Tyler
            </h1>
            <p className="pb-5 text-xl font-body text-theme-s8">
              I'm a <span className="font-bold">Software Developer </span> in
              Seattle WA.
            </p>
            <p className="text-xl font-body text-theme-s8">
              I'm passionate about crafting high quality products that excite
              users and are easy to maintain.
            </p>
          </div>
          <div className="w-3/4 mx-auto lg:mx-0 lg:w-1/2 lg:max-w-5xl">
            <Img fluid={data.file?.childImageSharp?.fluid} />
          </div>
        </section>
        <section className="max-w-screen-lg p-6 pt-24 mx-auto xl:pt-32">
          <div className="text-xl font-display text-theme-s9">Recent Posts</div>
          <BlogPosts />
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

export default Index

export const query = graphql`
  query IndexPage {
    file(relativePath: { eq: "Computer-Hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
