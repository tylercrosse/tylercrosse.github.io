import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Search from '../components/Search'

const SearchPage: React.FC = () => {
  return (
    <>
      <SEO title="Search" />
      <Layout>
        <section className="max-w-screen-lg p-6 pt-24 mx-auto xl:pt-32">
          <Search />
        </section>
      </Layout>
    </>
  )
}

export default SearchPage
