import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AllTags from '../components/AllTags'

const Tags: React.FC = () => {
  return (
    <>
      <SEO title="All Tags" />
      <Layout>
        <main className="relative py-10 bg-theme-p5">
          <section className="max-w-screen-lg p-6 pt-32 mx-auto">
            <div className="text-xl font-display text-theme-s9">All Tags</div>
            <AllTags />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Tags
