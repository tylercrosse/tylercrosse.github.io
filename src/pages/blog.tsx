import React from 'react'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <main className="relative py-10 bg-theme-p5">
        <section className="flex max-w-screen-xl p-6 pt-64 mx-auto">
          <h1 className="text-xl font-display text-theme-s9">All Posts</h1>
          <div>
            <BlogPosts />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Blog
