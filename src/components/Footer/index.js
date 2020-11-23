import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialIcons, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights } from "./FooterElements"
import Logo from '../../images/logo-black.png'
import News from '../../images/con1.jpg'
import './style.css'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAboutPage {
            aboutTop {
                aboutTop  
            }
        }    
        allContentfulServicesPage(limit: 4) {
          edges {
            node {
                title
            }
          }
        }
        allContentfulBlogPost( sort: { fields: publishedDate, order:DESC }, limit: 3) {
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
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-30">
                    <h5>Our Services</h5>
                    {data.allContentfulServicesPage.edges.map((edge) => {
                        return  (
                        <div>
                            {edge.node.title}
                        </div>    
                        )    
                    })} 
                    
                </div>
                <div class="col-lg-3 col-md-6 mb30">
                    <div class="widget">
                    <h5>Latest News</h5>
                    <ol>
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return  (
                            <li>
                                <div class="widget-posts-image">
                                    <img src={News} alt="" />
                                </div>
                                <div class="widget-posts-body">
                                    <Link to={`/news/${edge.node.slug}`}>   
                                        <h6>{edge.node.title}</h6>
                                        <p>{edge.node.publishedDate}</p>
                                    </Link>
                                </div>
                                
                            </li>
                            )    
                        })} 
                    </ol>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb30">
                    <h5>Who We Are</h5>
                    <h6>
                    {data.contentfulAboutPage.aboutTop.aboutTop}
                    </h6>
                </div>
                <div class="col-lg-3 col-md-6 mb30">
                    <h5>Opening Hours</h5>
                    <ul class="list-unstyled list-links">
                        <li>
                            <a href="#!">Monday - Friday
                                <i class="icon-arrow-right mr-2 ml-2"></i>
                                <strong>8:AM to 4:PM</strong>
                            </a>
                        </li>
                        <li>
                            <a href="#!">Satuarday
                                <i class="icon-arrow-right mr-2 ml-2"></i>
                                <strong>9:Am to 1:Pm</strong>
                            </a>
                        </li>
                        <li>
                            <a href="#!">Sunday
                                <i class="icon-arrow-right mr-2 ml-2"></i>
                                <strong>Closed</strong>
                            </a>
                        </li>

                    </ul>
                    <div class="pt-4">
                        <a href="#!" class="btn btn-outline-primary btn-rounded">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-6 mr-auto ml-auto">
                <a href="#!">© Copyright 2020.Disperse</a>
                
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer