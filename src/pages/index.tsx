import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

interface IndexProps {
  data: IndexPageQuery
}

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <main className="relative py-10 bg-sol-base3">
        <section className="flex max-w-screen-xl p-6 pt-64 mx-auto">
          <div className="w-1/2 pt-10 pr-8">
            <h1 className="text-7xl font-display">Hi, I'm Tyler,</h1>
            <p className="pb-5 text-xl font-body">
              a <span className="font-bold">Software Developer </span> in
              Seattle WA.
            </p>
            <p className="text-xl font-body">
              I'm passionate about crafting high quality products that excite
              users and are easy to maintain.
            </p>
          </div>
          <div className="w-1/2">
            <Img fluid={data.file?.childImageSharp?.fluid} />
          </div>
        </section>
        <section className="max-w-screen-lg p-6 pt-32 mx-auto">
          <div className="text-xl font-display">Recent Posts</div>
          <BlogPosts />
          <Link to="/blog">See More</Link>
        </section>
      </main>
    </Layout>
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
