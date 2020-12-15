import React from 'react'
import {DarkModeSwitch} from 'src/components/DarkModeSwitch'
import Container from 'src/components/layouts/Layout'
import Hero from 'src/components/sections/Hero'

const Index = () => (
  <Container height="100vh">
    <Hero
      title="Launding Page Title Here"
      subtitle="This is the subheader section where you describe the basic benefits of your product"
      image="https://source.unsplash.com/collection/404339/800x600"
      ctaText="Create your account now"
      ctaLink="/signup"
    />
    <DarkModeSwitch />
  </Container>
)

export default Index
