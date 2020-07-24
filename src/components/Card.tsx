import React from 'react'

const tags = ['#travel', '#photography', '#winter']

interface TagPillProps {
  tag: string
}

const TagPill: React.FC<TagPillProps> = ({ tag }) => (
  <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
    {tag}
  </span>
)

interface CardProps {
  tags: string[]
  imageUrl: string
  title: string
  description: string
}

const Card: React.FC<CardProps> = () => (
  <div className="overflow-hidden rounded shadow-lg">
    <img
      className="w-full"
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
      <p className="text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      {tags.map(tag => (
        <TagPill tag={tag} key={tag} />
      ))}
    </div>
  </div>
)

export default Card
