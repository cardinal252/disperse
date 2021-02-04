import React from 'react'
import './style.css'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../../smart-form/contact/css/smart-forms.css'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAboutPage {
            header
            aboutTop {
                aboutTop  
            }
        }    
        allContentfulPageHeaders {
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
                    {data.allContentfulPageHeaders.edges.map((edge) => {
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
                <div class="col-sm-3">
                    <div class="widget">
                        <h6 class="montserrat text-uppercase bottom-line">Contact Us</h6>
                        <address class="map-background">
                            <p>{data.contentfulContactPage.address.address} </p>
                            <p>Phone: {data.contentfulContactPage.phone}</p>
                            <p>E-mail: <a href="mailto:support@neomax.com">{data.contentfulContactPage.email}</a></p>  
                        </address>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="smart-forms">
                        <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
                        
                                <h4>Join Our Mailing List :</h4>
                                <div class="section">
                                    <label class="field prepend-icon">
                                        <input type="text" name="sendername" id="sendername" class="gui-input" placeholder="Enter name" />
                                        <span class="field-icon"><i class="fa fa-user"></i></span>  
                                    </label>
                                </div>
                                <div class="section">
                                    <label class="field prepend-icon">
                                        <input type="email" name="emailaddress" id="emailaddress" class="gui-input" placeholder="Email address" />
                                        <span class="field-icon"><i class="fa fa-envelope"></i></span>
                                    </label>
                                </div>
                                
                                <div class="result"></div>                                                                         
                        
                            <div>
                                <button type="submit" data-btntext-sending="Sending..." class="button btn btn-primary">Submit</button>
                                <button type="reset" class="button"> Reset </button>
                            </div>
                        </form>
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