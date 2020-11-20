import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import Sketch2 from '../../images/1.jpg'
import Image1 from "../../images/con1.jpg"
import { Link, graphql, useStaticQuery } from 'gatsby'
import BlogTemplate from '../../templates/blog'

const Services = () => {
 
    const data = useStaticQuery(graphql`
    query {
        allContentfulServicesPage {
          edges {
            node {
              title
              body {
                body
              }
            }
          }
        }
        allContentfulServices {
            edges {
                node {
                    title
                    body {
                        body
                    }
                }
            }
        }
      }
  `)
      
  return (
        <>
            <div class="container mb50">
                <div class="row align-items-center">
                    <div class="col-md-6 mb30">
                        <h3 class="mb20">What We Do</h3>
                        <p class="lead">
                            What We Do!
                        </p>
                        <div className="container pt30 pb30">
                        <ol>
                            {data.allContentfulServicesPage.edges.map((edge) => {
                                return  (
                                <li>
                                    <h3>{edge.node.title}</h3>
                                    <p>{edge.node.body.body}</p>
                                </li>
                                )    
                            })} 
                        </ol>
                        </div>  
                        {/* <a href="#" class="btn btn-primary">
                            Learn More
                        </a> */}
                    </div>
                    <div class="col-md-6 mb30">
                        <img src={Sketch2} alt="" class="img-fluid" />
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
                                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a> 
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