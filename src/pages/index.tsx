import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Ideas from '../components/Ideas'
import ThemeContext from '../context/ThemeContext'

interface IndexProps {
  data: IndexPageQuery
}

const Index: React.FC<IndexProps> = ({ data }) => {
  const heroImg = data.file?.childImageSharp
    ?.gatsbyImageData as IGatsbyImageData
  const { dark } = useContext(ThemeContext)
  return (
    <>
      <SEO title="Home" />
      <Layout isWhite={!dark}>
        <section className="max-w-screen-xl p-6 mx-auto md:pt-16 lg:pt-64 lg:flex">
          <div className="py-10 lg:pr-8 lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-display text-theme-s9">
              Hi, I'm Tyler
            </h1>
            <p className="pb-5 text-xl font-body text-theme-s8">
              I'm passionate about crafting high quality products that excite
              users and are easy to maintain.
            </p>
            <p className="text-xl font-body text-theme-s8">
              I currently lead a software team at{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-sol-blue"
                href="http://www.knowable.com/"
              >
                Knowable
              </a>
            </p>
          </div>
          <div className="w-3/4 mx-auto lg:mx-0 lg:w-1/2 lg:max-w-5xl">
            <GatsbyImage
              image={heroImg}
              alt="Building great software products."
            />
          </div>
        </section>
        <section className="max-w-screen-lg p-6 pt-24 mx-auto xl:pt-32">
          <div className="text-xl font-display text-theme-s9">Recent Posts</div>
          <Ideas limit={3} />
          <Link
            to="/ideas"
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
        gatsbyImageData(
          width: 480
          placeholder: TRACED_SVG
          layout: CONSTRAINED
        )
      }
    }
  }
`
