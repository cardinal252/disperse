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
        page: contentfulContactPage(id: {eq: "77e8e669-7cba-58c2-b83c-2ad7d3769bcb"}) {
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
      <Contact page={data.page} />
    </Layout>
  );
}

export default ContactPage
