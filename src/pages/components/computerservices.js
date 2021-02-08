import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Services = () => {
 
    const data = useStaticQuery(graphql`
    query {
        allContentfulServicesPage(limit: 4) {
          edges {
            node {
              title
              body {
                body
              }
              servicesImage {
                    resize {
                        src  
                    }
                }
            }
          }
        }
        allContentfulServices(limit: 3) {
            edges {
                node {
                    title
                    body {
                        body
                    }
                }
            }
        }
        contentfulServicesImage {
            serviceImage {
                resize(height: 1030) {
                    src
                }
            }
        }
        contentfulServicesAbout {
            header
            subheader
            bodyServices {
              bodyServices
            }
          }
      }
  `)
      
  return (
        <>
            <div className="container mb50">
                <div className="row align-items-center">
                    <div className="mb30">
                        <h3 className="mb20">{data.contentfulServicesAbout.header}</h3>
                        <p className="lead">
                            {data.contentfulServicesAbout.subheader}
                        </p>
                        <div className="container pt30 pb30">
                        <ul>
                            {data.allContentfulServicesPage.edges.map((edge) => {
                                return  (   
                                    <li>
                                        <div className="row">
                                            <div className="col-md-8">    
                                                <h3>{edge.node.title}</h3>
                                                <p>{edge.node.body.body}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={edge.node.servicesImage.resize.src} alt={edge.node.title} />   
                                            </div> 
                                        </div>          
                                    </li>
                                )    
                            })} 
                        </ul>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}'>  
                <div className="container">
                    <div className="row">        
                {data.allContentfulServices.edges.map((edge) => {
                    return  (
                        <div className="col-lg-4 col-md-4 pt30 pb30 text-center">
                            <div className="icon-bg">
                                <i className="ti-image fa-4x mb20"></i>
                           
                                <Link to={`/news/${edge.node.slug}`}>
                                <h2 className="post-title">{edge.node.title}</h2>
                                <p>{edge.node.body.body}</p>  
                                <p>Read more ›</p> 
                                </Link>
                            
                            </div>
                        </div>
                    )    
                })} 
                        </div>
                    </div>
				</div>

        <div className="pt0 pb0">
            <Testimonials />
        </div>
        </>    
    )  
}

export default Services