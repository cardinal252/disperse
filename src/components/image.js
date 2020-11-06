import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./image.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["banner", "banner2", "banner3", "banner4", "banner5"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }  
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image-container">
      <h1>Products</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => (
           <Img key={key}
           className="image-item"
           fluid={image.node.childImageSharp.fluid}
           alt={image.node.base.split('.')[0]}
           />
        ))}
      </div>
    </div>
  )
}
 
export default Image
