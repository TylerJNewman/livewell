import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import CompleteView from 'src/components/sections/CompleteView'

const Complete = () => (
  <Layout
    overflow="scroll"
    lightColor={'orange.200'}
    darkColor={'purple.500'}
    h="100vh"
  >
    <Header />
    <CompleteView />
  </Layout>
)

export default Complete
