import React from 'react'
import Layout from '../components/Layout'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout>
      <h1>ABOUT</h1>
      <p>
        I love learning, and teaching what I already know. I’m a resourceful
        software developer excited by building pragmatic features that enrich
        and streamline user experience. When I'm not attending hackathons or
        teaching other community members how to code, I'm on a bike, a mountain,
        an airplane, or buried in a good book.
      </p>
    </Layout>
  )
}

export default About
