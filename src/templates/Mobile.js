import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMarticle(slug: {eq: $slug}) {
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
            <Head title="{props.data.contentfulMarticle.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMarticle.title}</h1> 
                    <img 
                        src={props.data.contentfulMarticle.mImage.fluid.src} 
                        alt={props.data.contentfulMarticle.title}
                    />    
                    <p className="pt20">{props.data.contentfulMarticle.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate