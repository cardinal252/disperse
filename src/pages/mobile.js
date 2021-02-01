import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mobile from "./components/mobile"


const MobilePage = () => (
  <Layout>
    <SEO title="Mobile" />
    <h1 className="portfolio">MOBILE</h1>
    <Mobile />
  </Layout>
)

export default MobilePage
