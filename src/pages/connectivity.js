import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Connectivity from "./components/connectivity"


const ConnectivityPage = () => (
  <Layout>
    <SEO title="Connectivity" />
    <h1 className="portfolio">CONNECTIVITY</h1>
    <Connectivity />
  </Layout>
)

export default ConnectivityPage
