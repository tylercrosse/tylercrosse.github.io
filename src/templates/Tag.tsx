import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AllTags from '../components/AllTags'
import { IdeaPreview } from '../components/Ideas'
import ThemeContext from '../context/ThemeContext'

interface TagTemplateProps {
  readonly data: {
    allMdx: {
      edges: Array<{
        node: {
          id: string
          timeToRead?: number | null | undefined
          frontmatter?: {
            path: string
            title: string
            description: string
            date: string
            tags: string[]
          }
        }
      }>
    }
  }
  readonly pageContext: {
    tag: string
  }
}

const Template: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  const { dark } = useContext(ThemeContext)
  return (
    <>
      <SEO title={`Posts tagged with #${pageContext.tag}"`} />
      <Layout isWhite={!dark}>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0 md:pt-24 xl:pt-32">
          <h1 className="text-xl font-display text-theme-s9">
            Posts tagged with #{pageContext.tag}
          </h1>
          {data.allMdx.edges.map(edge => (
            <IdeaPreview node={edge.node} />
          ))}
        </section>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0">
          <div className="text-xl font-display text-theme-s9">All Tags</div>
          <AllTags />
        </section>
      </Layout>
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query Tag($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          id
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
    }
  }
`
