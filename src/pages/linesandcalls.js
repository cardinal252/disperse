import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinesandCalls from "./components/linesandcalls"


const LinesandCallsPage = () => (
  <Layout>
    <SEO title="Lines and Calls" />
    <h1 className="portfolio">LINES & CALLS</h1>
    <LinesandCalls />
  </Layout>
)

export default LinesandCallsPage
