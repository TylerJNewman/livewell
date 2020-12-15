import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import TrainingView from 'src/components/sections/TrainingView'

const Training = () => (
  <Layout
    height="100vh"
    overflow="scroll"
    lightColor={'teal.300'}
    darkColor={'red.300'}
  >
    <Header />
    <TrainingView />
  </Layout>
)

export default Training
