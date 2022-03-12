import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AllTags from '../components/AllTags'
import Ideas from '../components/Ideas'

const Tags: React.FC = () => {
  return (
    <>
      <SEO title="All Tags" />
      <Layout>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0 md:pt-24 xl:pt-32">
          <h1 className="text-xl font-display text-theme-s9">All Tags</h1>
          <AllTags />
        </section>
        <section className="max-w-2xl px-4 pb-10 m-auto md:px-0">
          <div className="text-xl font-display text-theme-s9">All Posts</div>
          <Ideas />
        </section>
      </Layout>
    </>
  )
}

export default Tags
