import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Main = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulMain(sort: {fields: servicesOrder, order: ASC}, limit: 4) {
            edges {
              node {
                id  
                title
                subheader {
                  subheader
                }
                servicesImage {
                  resize(height: 200) {
                    src
                  }
                }
              }
            }
          }
          contentfulMain(title: {eq: "TELEPHONE SYSTEMS"}) {
            servicesImage {
              resize {
                src
              }
            }
            title
            body {
              body
            }
          }  
        allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC }, limit: 3 ) {
            edges {
                node {
                    id
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                    body {
                        body
                    }
                    media {
                        resize(width: 680, height: 489) {
                          src
                        }
                    }
                }
            }
        }
        contentfulHeader {
            header
            subheader
        }
        contentfulHeader {
            header
            subheader
        }
      }
  `)
  
return (
    <>
        <div className='container pt90 pb60'>
                <div  className='row'>
                    <div  className='col-md-5 mb30'>
                    
                            <img className="mb30" src={data.contentfulMain.servicesImage.resize.src} alt={data.contentfulMain.title} />
                            <h5  className='text-uppercase mb20'>{data.contentfulMain.title}</h5>
                            <p>{data.contentfulMain.body.body}</p>
                        
                    </div>    
                    <div  className='col-md-7 ml-auto'>
                        <div  className='row'>
                            {data.allContentfulMain.edges.map((edge) => {
                                return  (
                                    <div key={edge.node.id} className='col-md-6 mb30 text-center'>
                                        <img className="mb30" src={edge.node.servicesImage.resize.src} alt={edge.node.title} />
                                        <h5 className='text-uppercase mb20'>{edge.node.title}</h5>
                                        <p>{edge.node.subheader.subheader}</p>
                                    </div>      
                                )    
                            })} 
                        </div>      
                    </div>
                </div>
            </div>
            <div  className="container">

<div  className="row">
    <div  className="col-sm-12 col-sm-offset-3">
        <div  className="module-header text-center">
            <h2  className="montserrat text-uppercase">{data.contentfulHeader.header}</h2>
            <p  className="lead divider-line">{data.contentfulHeader.subheader}</p>
        </div>
    </div>
</div>

<div  className="row multi-columns-row post-columns">         
{data.allContentfulBlogPost.edges.map((edge) => {
    return  (
    <div key={edge.node.id} className="col-sm col-md-4 col-lg-4">
        <article  className="post format-image bg-white">
            <div  className="post-preview">
                <img src={edge.node.media.resize.src} alt={edge.node.title} />
            </div>
            <div  className="post-content">
                <Link to={`/news/${edge.node.slug}`}>
                <h2  className="post-title">{edge.node.title}</h2>
                <ul  className="post-meta">
                    <li>{edge.node.publishedDate}</li>
                </ul> 
                <p>{edge.node.body.body}</p>  
                <Link to="/"  className="btn btn-lg btn-link btn-base">Read more ›</Link> 
                </Link>
            </div>
        </article>
    </div>
    )    
})} 

</div>

<div  className="row">
    <div  className="col-sm-12">
        <div  className="text-center m-t-35 m-b-35">
            <Link to="/">Read all news</Link>
        </div>
    </div>
</div>

</div>
    </>
    )  
}

export default Main