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
    className="px-3 py-1 mr-2 text-xs rounded-full bg-theme-s7 hover:bg-theme-s8 text-theme-p9"
  >
    #{tag}
  </Link>
)

export default TagPill
