import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css' 
import Head from '../components/head'

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
      <div className="container pt30 pb30">
        <Head title="Blog" />  
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return  (
              <li className={blogStyles.post}>
                <Link to={`/news/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )    
          })} 
        </ol>
      </div>  
  )
}

export default News