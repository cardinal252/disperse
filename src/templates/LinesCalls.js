import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulLCarticles(slug: {eq: $slug}) {
            title
            body {
                body
            }
            lcImage {
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
            <Head title="{props.data.contentfulLCarticles.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulLCarticles.title}</h1> 
                    <img 
                        src={props.data.contentfulLCarticles.lcImage.fluid.src} 
                        alt={props.data.contentfulLCarticles.title}
                    />    
                    <p className="pt20">{props.data.contentfulLCarticles.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate