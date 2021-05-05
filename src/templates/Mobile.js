import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMenuArticleC(slug: {eq: $slug}) {
            title
            body {
                body
            }
            mImage {
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
            <Head title="{props.data.contentfulMenuArticleC.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMenuArticleC.title}</h1> 
                    <img 
                        src={props.data.contentfulMenuArticleC.mImage.fluid.src} 
                        alt={props.data.contentfulMenuArticleC.title}
                    />    
                    <p className="pt20">{props.data.contentfulMenuArticleC.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate