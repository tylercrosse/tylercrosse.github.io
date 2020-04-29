import React from 'react'
import Layout from '../components/Layout'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <Layout>
      <main className="relative h-screen bg-sol-base3">
        <div className="max-w-screen-lg p-6 pt-32 mx-auto">
          <h1 className="text-6xl font-display">Hi, I'm Tyler</h1>
          <p className="text-xl font-body">
            I'm passionate about crafting high quality products that excite
            users and are easy to maintain.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Index
