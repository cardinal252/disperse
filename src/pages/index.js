import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout/layout.js"
import Seo from "../components/seo"
import Main from './components/index'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
    return (
      <Layout>
        <Seo title={ data.page.browserTitle } />
        <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } topBanHome={ data.page.topBanHome.fluid.src }/>
        <Main />
      </Layout>
    );
  }

export const query = graphql`
    query {
      page: contentfulHomePage(name: {eq: "Home"}) {
        browserTitle
        title
        subtitle
        topBanHome {
          fluid {
            src
          }
        }
      }
    }`;

export default IndexPage
