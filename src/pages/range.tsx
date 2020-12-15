import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import TimeRange from 'src/components/sections/TimeRange'

const Index = () => (
  <Layout
    height="100vh"
    overflow="scroll"
    lightColor={'cyan.400'}
    darkColor={'purple'}
  >
    <Header />
    <TimeRange />
  </Layout>
)

export default Index
