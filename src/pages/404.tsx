import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Search from '../components/Search'
import { NotFoundPageQuery } from '../../graphql-types'

interface NotFoundProps {
  data: NotFoundPageQuery
}
const NotFound: React.FC<NotFoundProps> = ({ data }) => {
  const heroImg = data.file?.childImageSharp?.fluid as FluidObject
  return (
    <>
      <SEO title="404 Page Not Found" />
      <Layout>
        <section className="max-w-screen-lg p-6 mx-auto md:pt-24">
          <div className="max-w-xl m-auto">
            <Img fluid={heroImg} />
          </div>
          <h1 className="my-8 text-3xl text-center font-body text-theme-s8">
            Page Not Found
          </h1>
          <Search />
        </section>
      </Layout>
    </>
  )
}

export default NotFound

export const query = graphql`
  query NotFoundPage {
    file(relativePath: { eq: "404-alien.png" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
