import React from 'react'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <main className="relative py-10 bg-theme-p5">
        <section className="max-w-screen-lg p-6 pt-32 mx-auto">
          <div className="text-xl font-display text-theme-s9">All Posts</div>
          <BlogPosts />
        </section>
      </main>
    </Layout>
  )
}

export default Blog
