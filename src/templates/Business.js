import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBSarticles(slug: {eq: $slug}) {
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
            <Head title="{props.data.contentfulBSarticles.title}" />
            <div className="container pt100">
                <div>
                <h1 className="news">{props.data.contentfulBSarticles.title}</h1> 
                    <img 
                        src={props.data.contentfulBSarticles.bsImage.fluid.src} 
                        alt={props.data.contentfulBSarticles.title}
                    />    
                    <p>{props.data.contentfulBSarticles.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate