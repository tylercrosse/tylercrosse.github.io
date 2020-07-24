import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

interface TagPillProps {
  tag: string | null
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => {
  if (tag === null) return tag
  return (
    <Link
      to={`/tags/${kebabCase(tag)}`}
      className="mr-2 font-body text-theme-s7 focus:text-sol-blue hover:text-sol-blue"
    >
      #{tag}
    </Link>
  )
}

export default TagPill
