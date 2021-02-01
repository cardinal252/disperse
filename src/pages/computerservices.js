import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ComputerServices from "./components/computerservices"


const ComputerServicesPage = () => (
  <Layout>
    <SEO title="Computer Services" />
    <h1 className="portfolio">COMPUTER SERVICES</h1>
    <ComputerServices />
  </Layout>
)

export default ComputerServicesPage
