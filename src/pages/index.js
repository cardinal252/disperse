import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from './components/index'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
    const data = useStaticQuery(
      graphql
        `query {
          page: contentfulHomePage(name: {eq: "Home"}) {
            browserTitle
            title
            subtitle
          }
        }`
    );

    return (
      <Layout>
        <SEO title={ data.page.browserTitle } />
        <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } />
        <Main />
      </Layout>
    );
  }

export default IndexPage
