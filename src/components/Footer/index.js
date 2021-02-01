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
            header
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
                    media {
                        resize(width: 44, height: 44) {
                          src
                        }
                    }
                }
            }
        }
        contentfulBlogTitle {
            heading
            subheading
        }
        contentfulServicesAbout {
            header
        }
        contentfulContactPage {
            address {
              address
            }
            email
            phone
            companyInfo {
              companyInfo
            }
          }
    }
`)

    return (
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-30">
                    <h6 class="montserrat text-uppercase bottom-line">{data.contentfulServicesAbout.header}</h6>
                    {data.allContentfulServicesPage.edges.map((edge) => {
                        return  (
                        <div>
                            {edge.node.title}
                        </div>    
                        )    
                    })} 
                    
                </div>
                <div class="col-lg-3">
                    <div class="widget">
                    <h6 class="montserrat text-uppercase bottom-line">{data.contentfulBlogTitle.heading}</h6>
                    <ul>
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return  (
                            <li>
                                <div class="widget-posts-image">
                                    <img src={edge.node.media.resize.src} alt={edge.node.title} />
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
                    </ul>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="widget">
                        <h6 class="montserrat text-uppercase bottom-line">Contact Us</h6>
                        <address class="map-background">
                            <p>{data.contentfulContactPage.address.address} </p>
                            <p>Phone: {data.contentfulContactPage.phone}</p>
                            <p>E-mail: <a href="mailto:support@neomax.com">{data.contentfulContactPage.email}</a></p>
                            <form>
                                <label>
                                    Join Our Mailing List:
                                    <input type="text" name="email" value="" />
                                    <button type="submit">Submit</button>

                                </label>
                            </form>
                        </address>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-6 mr-auto ml-auto">
                © Copyright {new Date().getFullYear()} Disperse
                
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer