import React from 'react'
import { Link, graphql } from 'gatsby'
import HeroSection from "../components/herosection"
import Layout from "../components/layout"
import Head from "../components/head"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Blog = ({ data }) => {
  return (
    <Layout>
    <Head title={ data.page.browserTitle } />
    <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } heroImage={data.page.heroImage.fluid.src} />    
    <section class="module">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="lead text-center">{renderRichText(data.page.body)}</p>
                </div>
            </div>

        </div>
        <hr />
			  <div class="container">
  				<div class="row">
            <div class="col-sm-10 col-sm-offset-1 blog-content">
              {data.allContentfulBlogPost.edges.map((edge) => {
                return  (
                  <article class="post format-image">
                    <div class="post-preview">
                      <a href={edge.node.slug}><img src={edge.node.image.fluid.src} alt={edge.node.title}/></a>
                    </div>
                    <div class="post-content">
                      <h2 class="post-title"><a href={edge.node.slug}>{edge.node.title}</a></h2>
                      <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                      <a href={edge.node.slug} class="btn btn-lg btn-link btn-base">Read more ›</a>
                    </div>
                  </article>
                )
              })}
            </div>            
          </div>
        </div>
      </section>      
    </Layout>
  )
}

export const data = graphql`
    query {
      page: contentfulBlogHubPage {
        browserTitle
        title
        body {
          raw
        }        
        heroImage {
          fluid {
              src
          }
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
              fluid(maxWidth:500) {
                  src
              }
            }          
          }
        }
      }
    }`

export default Blog