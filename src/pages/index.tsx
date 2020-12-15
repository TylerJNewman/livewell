import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import Hero from 'src/components/sections/Hero'

const Index = () => (
  <Layout height="100vh">
    <Header />
    <Hero
      title="Become the Best You"
      subtitle="Our app-based program applies principles of modern science to make your body and mind better."
      svg="/girl.svg"
      image="/sands.jpg"
      ctaText="Try for free"
      ctaLink="/signup"
    />
  </Layout>
)

export default Index
