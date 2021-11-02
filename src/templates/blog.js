import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head';

export const query = graphql`
    query($slug: String!) {
        article: contentfulBlogPost(slug: {eq: $slug}) {
            title
            body {
                body
            }
            image {
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
            <Head title={props.data.article.title} />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <h1 className="news">{props.data.article.title}</h1> 
                    <img src={props.data.article.image.fluid.src} alt={props.data.article.title} />    
                    <p className="pt20">{props.data.article.body.body}</p>     
            </div>      
        </Layout>
    )
}

export default BlogTemplate