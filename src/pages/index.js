import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from './components/index'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Main />
  </Layout>
)

export default IndexPage
