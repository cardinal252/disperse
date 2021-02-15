import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulConArticle(slug: {eq: $slug}) {
            title
            body {
                body
            }
            conImage {
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
            <Head title="{props.data.contentfulConArticle.title}" />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulConArticle.title}</h1> 
                    <img 
                        src={props.data.contentfulConArticle.conImage.fluid.src} 
                        alt={props.data.contentfulConArticle.title}
                    />    
                    <p className="pt20">{props.data.contentfulConArticle.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate