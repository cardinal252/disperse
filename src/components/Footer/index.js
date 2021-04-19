import React from 'react'
import './style.css'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../../smart-form/contact/css/smart-forms.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faTwitter,
    faGooglePlus,
    faSkype,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {   
        allContentfulMain(sort: {order: ASC, fields: pageOrder}) {
            edges {
              node {
                icon {
                  resize(width: 20) {
                    src
                  }
                }
                pageTitle
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
                        resize(width: 200, height: 200) {
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
        contentfulContactPage {
            address 
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
                <div class="col-lg-3 col-md-6">
                    <div class="widget">
                    <h6 class="montserrat text-uppercase bottom-line">WHAT WE DO</h6>
                    <ul className="recent-posts">
                        {data.allContentfulMain.edges.map((edge) => {
                            return  (
                            <li>
                                <div className="row">
                                    <div class="col-md-3 widget-posts-image">
                                        <img src={edge.node.icon.resize.src} alt={edge.node.pageTitle} />
                                    </div>
                                    <div class="col-md-8 widget-posts-body">
                                        <Link to={`${edge.node.pageTitle}`}>   
                                            <h6>{edge.node.pageTitle}</h6>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            )    
                        })} 
                    </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="widget">
                    <h6 class="montserrat text-uppercase bottom-line">{data.contentfulHeader.header}</h6>
                    <ul className="recent-posts">
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return  (
                            <li>
                                <div className="row">
                                    <div class="col-md-3 widget-posts-image">
                                        <img src={edge.node.media.resize.src} alt={edge.node.title} />
                                    </div>
                                    <div class="col-md-8 widget-posts-body">
                                        <Link to={`/news/${edge.node.slug}`}>   
                                            <h6>{edge.node.title}</h6>
                                            <p>{edge.node.publishedDate}</p>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            )    
                        })} 
                    </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                        <h6 class="montserrat text-uppercase bottom-line">Contact Us</h6>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="widget">
                                        
                                        <address class="map-background">
                                            <h6 className="text-uppercase">Address</h6>
                                            <p>{data.contentfulContactPage.address}</p>
                                        </address>
                                    </div>
                                </div> 
                                <div class="col-lg-6">
                                    <div class="widget">
                                        <address class="map-background">
                                            <h6 className="text-uppercase">Phone</h6>
                                            <p>{data.contentfulContactPage.phone}</p>
                                            <h6 className="text-uppercase">Email</h6>
                                            <p><a href="mailto:support@neomax.com">{data.contentfulContactPage.email}</a></p>
                                        </address>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                        <div class="col-lg-6 clearfix">
                            <h4 class="text-uppercase">Social</h4>
                        </div> 
                        <div class="col-lg-6 clearfix social">
                                <Link to="#" class="social-icon si-border si-facebook">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            
                                </Link>
                                <Link to="#" class="social-icon si-border si-twitter">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            
                                </Link>
                                <Link to="#" class="social-icon si-border si-g-plus">
                                <FontAwesomeIcon icon={faGooglePlus} size="1x" />
                                
                                </Link>
                                <Link to="#" class="social-icon si-border si-skype">
                                <FontAwesomeIcon icon={faSkype} size="1x" />
                                
                                </Link>
                                <Link to="#" class="social-icon si-border si-linkedin">
                                <FontAwesomeIcon icon={faLinkedin} size="1x" />
                            
                                </Link>
                        </div>         
                    </div>    
                    <div class="row">
                        <div className="col-lg-12 smart-forms">
                    
                    
                            <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
            
                                <div className="section pt10">
                                    <label className="field prepend-icon">
                                        <input type="email" name="emailaddress" id="emailaddress" className="gui-input" placeholder="Join Our Mailing List" />
                                        <span className="field-icon"><FontAwesomeIcon icon={faEnvelope} size="1x" /></span>
                                        <span className="field-button append-icon" ><button type="submit" data-btntext-sending="Sending..." className="button btn btn-primary">Submit</button></span>
                                    </label>
                                </div>
                                
                                                                    
                            </form>
                        </div>
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