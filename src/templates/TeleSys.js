import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulTSarticle(slug: {eq: $slug}) {
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
            <Head title="{props.data.contentfulTSarticle.title}" />
            <div className="container pt100">
                <div>
                <h1 className="news">{props.data.contentfulTSarticle.title}</h1> 
                    <img 
                        src={props.data.contentfulTSarticle.tsImage.fluid.src} 
                        alt={props.data.contentfulTSarticle.title}
                    />    
                    <p>{props.data.contentfulTSarticle.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate