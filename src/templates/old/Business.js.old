import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMenuArticleE(slug: {eq: $slug}) {
            title
            body {
                body
            }
            bsImage {
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
            <Head title="{props.data.contentfulMenuArticleE.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMenuArticleE.title}</h1> 
                    <img 
                        src={props.data.contentfulMenuArticleE.bsImage.fluid.src} 
                        alt={props.data.contentfulMenuArticleE.title}
                    />    
                    <p className="pt20">{props.data.contentfulMenuArticleE.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate