import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPosts from '../components/BlogPosts'

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <section className="max-w-screen-lg p-6 pt-32 mx-auto">
          <div className="text-xl font-display text-theme-s9">All Posts</div>
          <BlogPosts />
        </section>
      </Layout>
    </>
  )
}

export default Blog
