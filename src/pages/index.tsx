import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import Hero from 'src/components/sections/Hero'

const Index = () => (
  <Layout height="100vh">
    <Header />
    <Hero
      title="Launding Page Title Here"
      subtitle="This is the subheader section where you describe the basic benefits of your product"
      image="https://source.unsplash.com/collection/404339/800x600"
      ctaText="Create your account now"
      ctaLink="/signup"
    />
  </Layout>
)

export default Index
