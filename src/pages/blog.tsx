import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPosts from '../components/BlogPosts'
import AllTags from '../components/AllTags'

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <section className="max-w-screen-lg p-6 pt-24 mx-auto xl:pt-32">
          <div className="text-xl font-display text-theme-s9">All Posts</div>
          <BlogPosts />
        </section>
        <section className="max-w-screen-lg p-6 pt-0 mx-auto">
          <div className="flex items-center text-xl font-display text-theme-s9">
            All Tags
          </div>
          <AllTags />
        </section>
      </Layout>
    </>
  )
}

export default Blog
