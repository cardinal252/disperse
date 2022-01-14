import React from "react"
import HeroSection from "../components/herosection"
import Layout from "../components/layout"
import Head from "../components/head"
import Main from '../components/home'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
    return (
      <Layout>
        <Head title={ data.page.browserTitle } />
        <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } heroImage={data.page.heroImage.file.url} />
        <Main />
      </Layout>
    );
  }

export const query = graphql`
    query {
      page: contentfulHomePage {
        browserTitle
        title
        subtitle
        heroImage {
          file{
            url
          }
        }
      }
    }`;

export default IndexPage
