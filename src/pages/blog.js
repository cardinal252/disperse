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
            media {
              fluid(maxWidth: 200) {
                  src
              }
          }
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
                <Link to={`/${edge.node.slug}`}>
                  <div className="col-lg-4">
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.publishedDate}</p>
                  </div>
                  <div className="col-lg-8">  
                    <img   
                        src={edge.node.media.fluid.src} 
                        alt={edge.node.title}
                    /> 
                  </div>    
                </Link>
              </li>
            )    
          })} 
        </ol>
      </div>  
  )
}

export default News