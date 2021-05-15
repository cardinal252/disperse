import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import SEO from '../components/seo.js'

const HubPageTemplate = (props) => {

    return (
        <Layout>
            <SEO title="Connectivity" />
            <Head title={props.data.page.title} />
            <h1 className="portfolio">{props.data.page.title}</h1>
            <div className="container pt30 pb30">
                <div>
                    <h1>{props.data.page.header}</h1>
                    <h3>{props.data.page.subheader.subheader}</h3>
                    <p>{props.data.page.body.body}</p>
                </div>
                <ol className="posts">
                    {props.data.articles.edges.map((edge) => {
                        return (
                            <li key={edge.node.id} className="post">
                                <Link to={`/${edge.node.slug}`}>
                                    <div className="row">
                                        <h2>{edge.node.title}</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <p>{edge.node.body.body}</p>
                                        </div>
                                        {edge.node.image &&
                                            <div className="col-lg-4">
                                                <img
                                                    src={edge.node.image?.fluid.src}
                                                    alt={edge.node.title}
                                                />
                                            </div>
                                        }
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($id: String!, $sectionId: String) {
        page:contentfulMain(id: {eq: $id}) {
            title
            header
            subheader{
                subheader
            }
            body {
                body
            }
        }
        articles: allContentfulArticlePage(filter: {section: {id: {eq: $sectionId}}}) {
            edges {
              node {
                id
                slug
                title
                body {
                    body
                }
                image {
                    fluid {
                        src
                    }
                }
              }
            }
        }
    }
`

export default HubPageTemplate