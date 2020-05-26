import React from 'react'
import { graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagPill from '../components/TagPill'

interface TagsProps {}

const Tags: React.FC<TagsProps> = ({ data }) => {
  const allTags = orderBy(
    data.allMarkdownRemark.group,
    ['totalCount', 'fieldValue'],
    ['desc', 'asc']
  )

  return (
    <>
      <SEO title="All Tags" />
      <Layout>
        <main className="relative py-10 bg-theme-p5">
          <section className="max-w-screen-lg p-6 pt-32 mx-auto">
            <div className="text-xl font-display text-theme-s9">All Tags</div>
            {allTags.map(tag => (
              <div className="my-2">
                <TagPill tag={tag.fieldValue} />
                <span className="text-theme-s8">{tag.totalCount}</span>
              </div>
            ))}
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Tags

export const pageQuery = graphql`
  query GroupedTags {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
