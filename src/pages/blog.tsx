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
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0 md:pt-24 xl:pt-32">
          <h1 className="text-xl font-display text-theme-s9">All Posts</h1>
          <BlogPosts />
        </section>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0">
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
