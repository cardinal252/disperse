import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from './components/index'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
    return (
      <Layout>
        <SEO title={ data.page.browserTitle } />
        <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } />
        <Main />
      </Layout>
    );
  }

export const indexQuery = graphql`
    query {
      page: contentfulHomePage(name: {eq: "Home"}) {
        browserTitle
        title
        subtitle
      }
    }`;

export default IndexPage
