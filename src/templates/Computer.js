import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMenuArticleF(slug: {eq: $slug}) {
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
            <Head title="{props.data.contentfulMenuArticleF.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMenuArticleF.title}</h1> 
                    <img 
                        src={props.data.contentfulMenuArticleF.csImage.fluid.src} 
                        alt={props.data.contentfulMenuArticleF.title}
                    />    
                    <p className="pt20">{props.data.contentfulMenuArticleF.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate