import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString:"MMMM Do, YYYY")
            body {
                body
            }
            media {
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
            <Head title="{props.data.contentfulBlogPost.title}" />
            <div className="container pt30">
                <div>
                <h1 className="news">{props.data.contentfulBlogPost.title}</h1> 
                    <p>{props.data.contentfulBlogPost.publishedDate}</p>
                    <img 
                        src={props.data.contentfulBlogPost.media.fluid.src} 
                        alt={props.data.contentfulBlogPost.title}
                    />    
                    <p>{props.data.contentfulBlogPost.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate