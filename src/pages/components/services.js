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
                    resize(width: 80) {
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
            <div class="container mb50">
                <div class="row align-items-center">
                    <div class="col-md-6 mb30">
                        <h3 class="mb20">{data.contentfulServicesAbout.header}</h3>
                        <p class="lead">
                            {data.contentfulServicesAbout.subheader}
                        </p>
                        <div className="container pt30 pb30">
                        <ul>
                            {data.allContentfulServicesPage.edges.map((edge) => {
                                return  (   
                                    <li>
                                        <div><img src={edge.node.servicesImage.resize.src} alt={edge.node.title} /></div>
                                        <div>    
                                            <h3>{edge.node.title}</h3>
                                            <p>{edge.node.body.body}</p>
                                        </div>       
                                    </li>
                                )    
                            })} 
                        </ul>
                        </div>  
                        {/* <a href="#" class="btn btn-primary">
                            Learn More
                        </a> */}
                    </div>
                    <div class="col-md-6 mb30">
                        <img src={data.contentfulServicesImage.serviceImage.resize.src} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
            <div class="bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}'>  
                <div class="container">
                    <div class="row">        
                {data.allContentfulServices.edges.map((edge) => {
                    return  (
                        <div class="col-lg-4 col-md-4 pt30 pb30 text-center">
                            <div class="icon-bg">
                                <i class="ti-image fa-4x mb20"></i>
                           
                                <Link to={`/news/${edge.node.slug}`}>
                                <h2 class="post-title">{edge.node.title}</h2>
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

        <div class="pt0 pb0">
            <Testimonials />
        </div>
        </>    
    )  
}

export default Services