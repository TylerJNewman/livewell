import React from 'react'
import Layout from 'src/components/layouts/Layout'
import Header from 'src/components/sections/Header'
import CompleteView from 'src/components/sections/CompleteView'

const Complete = () => (
  <Layout height="100vh" overflow="scroll">
    <Header />
    <CompleteView />
  </Layout>
)

export default Complete
