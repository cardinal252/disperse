import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from './components/about'


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="about">TECHNICAL STRATEGIES & IMPLEMENTATION</h1>
    <About />
  </Layout>
)

export default AboutPage
