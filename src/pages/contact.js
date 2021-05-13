import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "./components/contact"
import { graphql, useStaticQuery } from 'gatsby'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql
      `query {
        page: contentfulContactPage(name: {eq: "Contact Us"}) {
          browserTitle
          title
          address 
          email
          phone
          companyInfo {
            companyInfo
          }
          formTitle
          formIntro {
            internal {
              content
            }
          }             
        }
      }` 
  );  
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className="contact">{ data.page.title }</h1>
      <Contact data={data} />
    </Layout>
  );
}

export default ContactPage
