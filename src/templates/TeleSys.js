import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMenuArticleA(slug: {eq: $slug}) {
            title
            body {
                body
            }
            tsImage {
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
            <Head title="{props.data.contentfulMenuArticleA.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMenuArticleA.title}</h1> 
                    <img     
                        src={props.data.contentfulMenuArticleA.tsImage.fluid.src} 
                        alt={props.data.contentfulMenuArticleA.title}
                    />    
                    <p className="pt20">{props.data.contentfulMenuArticleA.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate