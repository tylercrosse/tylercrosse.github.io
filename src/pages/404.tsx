import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { NotFoundPageQuery } from '../../graphql-types'

interface NotFoundProps {
  data: NotFoundPageQuery
}
const NotFound: React.FC<NotFoundProps> = ({ data }) => {
  const heroImg = data.file?.childImageSharp
    ?.gatsbyImageData as IGatsbyImageData
  return (
    <>
      <SEO title="404 Page Not Found" />
      <Layout>
        <section className="max-w-screen-lg p-6 mx-auto md:pt-20">
          <div className="max-w-xl m-auto">
            <GatsbyImage
              image={heroImg}
              alt="Alien teleportation. I want to believe."
            />
          </div>
          <h1 className="my-8 text-3xl text-center font-body text-theme-s8">
            Page Not Found
          </h1>
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
        gatsbyImageData(
          width: 480
          placeholder: TRACED_SVG
          layout: CONSTRAINED
        )
      }
    }
  }
`
