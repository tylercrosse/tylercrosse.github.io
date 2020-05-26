import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import TagPill from './TagPill'

const AllTags: React.FC = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const allTags = orderBy(
    data.allMarkdownRemark.group,
    ['totalCount', 'fieldValue'],
    ['desc', 'asc']
  )

  return (
    <>
      {allTags.map(tag => (
        <div className="my-2">
          <TagPill tag={tag.fieldValue} />
          <span className="text-theme-s8">{tag.totalCount}</span>
        </div>
      ))}
    </>
  )
}

export default AllTags
