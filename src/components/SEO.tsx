import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={metaContent}
    >
      <link rel="icon" href="/images/favicon.svg" />
    </Helmet>
  )
}

export default SEO
