import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

interface TagPillProps {
  tag: string
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => (
  <Link
    key={tag}
    to={`/tags/${kebabCase(tag)}`}
    className="mr-2 font-body text-theme-s7 hover:text-sol-blue"
  >
    #{tag}
  </Link>
)

export default TagPill
