import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulCsArticles(slug: {eq: $slug}) {
            title
            body {
                body
            }
            csImage {
                fluid(maxWidth: 500) {
                    src
                }
            }
        }
    }
`

const BlogTemplate = (props) => {
  
    return (
        <Layout>
            <Head title="{props.data.contentfulCsArticles.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulCsArticles.title}</h1> 
                    <img 
                        src={props.data.contentfulCsArticles.csImage.fluid.src} 
                        alt={props.data.contentfulCsArticles.title}
                    />    
                    <p className="pt20">{props.data.contentfulCsArticles.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate