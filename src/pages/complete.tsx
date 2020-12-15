import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import CompleteView from 'src/components/sections/CompleteView'

const Complete = () => (
  <Layout
    height="100vh"
    overflow="scroll"
    lightColor={'orange.100'}
    darkColor={'purple.500'}
  >
    <Header />
    <CompleteView />
  </Layout>
)

export default Complete
