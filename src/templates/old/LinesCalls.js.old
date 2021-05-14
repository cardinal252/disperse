import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMenuArticleB(slug: {eq: $slug}) {
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
            <Head title="{props.data.contentfulMenuArticleB.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulMenuArticleB.title}</h1> 
                    <img 
                        src={props.data.contentfulMenuArticleB.lcImage.fluid.src} 
                        alt={props.data.contentfulMenuArticleB.title}
                    />    
                    <p className="pt20">{props.data.contentfulMenuArticleB.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate