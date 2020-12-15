import React from 'react'
import {CheckCircleIcon, LinkIcon} from '@chakra-ui/icons'
import {
  Code,
  List,
  ListItem,
  ListIcon,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import {CTA} from 'src/components/CTA'
import {DarkModeSwitch} from 'src/components/DarkModeSwitch'
import Container from 'src/components/layouts/Layout'
import {Main} from 'src/components/Main'
import Footer from 'src/components/sections/Footer'
// import {Hero} from 'src/components/Hero'
import Hero from 'src/components/sections/Hero'

const Index = () => (
  <Container height="100vh">
    <Hero
      title="Build this rad landing page from scratch"
      subtitle="This is the subheader section where you describe the basic benefits of your product"
      image="https://source.unsplash.com/collection/404339/800x600"
      ctaText="Create your account now"
      ctaLink="/signup"
    />
    <DarkModeSwitch />
  </Container>
)

export default Index
