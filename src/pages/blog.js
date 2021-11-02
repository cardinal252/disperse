import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import HeroSection from "../components/herosection"
import Layout from "../components/layout"
import Head from "../components/head"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      page: contentfulBlogHubPage {
        browserTitle
        title
        body {
          raw
        }        
      }
      allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC } ) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
            image {
              fluid(maxWidth: 200) {
                  src
              }
          }
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <Head title={ data.page.browserTitle } />
    <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } />    
    <section class="module">
          <div class="container">

              <div class="row">
                  <div class="col-sm-6 col-sm-offset-3">
                      <div class="module-header text-center">
                          <h2 class="montserrat text-uppercase">{data.page.title}</h2>
                          <p class="lead divider-line">{data.page.subtitle}</p>
                      </div>
                  </div>
              </div>


              <div class="row">
                  <div class="col-sm-12">
                      <p class="lead text-center">{renderRichText(data.page.body)}</p>
                  </div>
              </div>

          </div>
      </section>    
      <div className="container pt30 pb30">
        <ol className="posts">
          {data.allContentfulBlogPost.edges.map((edge) => {
            return  (
              <li key={edge.node.id} className="post">
                <Link to={`/${edge.node.slug}`}>
                  <div className="col-lg-4">
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.publishedDate}</p>
                  </div>
                  <div className="col-lg-8">  
                    <img   
                        src={edge.node.image.fluid.src} 
                        alt={edge.node.title}
                    /> 
                  </div>    
                </Link>
              </li>
            )    
          })} 
        </ol>
      </div>  
    </Layout>
  )
}

export default News