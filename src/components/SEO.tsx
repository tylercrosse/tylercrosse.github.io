import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ThemeContext from '../context/ThemeContext'

interface MetaVal {
  content: string
  property?: string
  name?: string
}

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaVal[]
  keywords?: string[]
  title: string
}
const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en',
  meta,
  keywords = [],
  title,
}) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  const metaDescription = description || data.site.siteMetadata.description
  const metaContent = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: data.site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(
    keywords.length > 0
      ? {
          name: `keywords`,
          content: keywords.join(`, `),
        }
      : []
  )
  const { dark } = useContext(ThemeContext)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={metaContent}
    >
      <style type="text/css">{`${
        dark /* scrollbar css */
          ? `*{scrollbar-color:hsla(0,0%,100%,0.25) transparent;color-scheme:dark;}*::-webkit-scrollbar{width:16px;}*::-webkit-scrollbar-track{background-color:#002b36;border:1px solid #073642;}*::-webkit-scrollbar-thumb{background-color:#586e75;border:3px solid transparent;border-radius:9px;background-clip:content-box;}*::-webkit-scrollbar-thumb:hover{background-color:#839496;}`
          : ''
      }`}</style>
      <link rel="icon" href="/images/favicon.svg" />
    </Helmet>
  )
}

export default SEO
