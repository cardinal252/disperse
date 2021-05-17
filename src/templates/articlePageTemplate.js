import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Seo from '../components/seo.js'

const ArticlePageTemplate = (props) => {

    return (
        <Layout>
            <Seo title={props.data.page.browserTitle ?? props.data.page.title} />
            <Head title={props.data.page.title} />
            <div className="templates pt80"></div>
            <div className="container pt30">
                <h1 className="news">{props.data.page.title}</h1>
                <img
                    src={props.data.page.image?.fluid.src}
                    alt={props.data.page.title}
                />
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
                fluid(maxWidth: 500) {
                    src
                }
            }
        }
    }
`

export default ArticlePageTemplate