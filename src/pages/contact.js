import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "./components/contact"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="contact">START YOUR JOURNEY NOW</h1>
    <Contact />
  </Layout>
)

export default ContactPage
