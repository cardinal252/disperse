import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout.js'
import Seo from '../components/seo.js'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ArticlePageTemplate = (props) => {

    return (
        <Layout>
            <Seo title={props.data.page.browserTitle ?? props.data.page.title} />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <h1 className="news">{props.data.page.title}</h1>
                {props.data.page.image && 
                    <GatsbyImage
                        image={getImage(props.data.page.image)}
                       
                        alt={props.data.page.title}
                    />
                }
                <p className="pt20">{props.data.page.body.body}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        page:contentfulArticlePage(id: {eq: $id}) {
            title
            body {
                body
            }
            image {
                gatsbyImageData(width: 400)
              }
        }
    }
`

export default ArticlePageTemplate