import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AllTags from '../components/AllTags'
import BlogPosts from '../components/BlogPosts'

const Tags: React.FC = () => {
  return (
    <>
      <SEO title="All Tags" />
      <Layout>
        <section className="max-w-screen-lg p-6 pt-12 mx-auto xl:pt-32">
          <div className="py-4 pb-8">
            <span className="p-2 pl-0 font-body text-theme-s7">Tags</span>
          </div>
          <div className="text-xl font-display text-theme-s9">All Tags</div>
          <AllTags />
        </section>
        <section className="max-w-screen-lg p-6 pt-0 mx-auto">
          <div className="text-xl font-display text-theme-s9">All Posts</div>
          <BlogPosts />
        </section>
      </Layout>
    </>
  )
}

export default Tags
