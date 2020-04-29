import React from 'react'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-screen-lg p-6 pt-32 mx-auto">
        <h1 className="text-xl font-display">All Posts</h1>
        <div>
          <BlogPosts />
        </div>
      </main>
    </Layout>
  )
}

export default Blog
