import React from 'react'
import './style.css'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../../smart-form/contact/css/smart-forms.css'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {   
        allContentfulMain {
          edges {
            node {
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
                        resize(width: 44, height: 44) {
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
                <div class="col-lg-2 col-md-6 mb-30">
                    <h6 class="montserrat text-uppercase bottom-line">WHAT WE DO</h6>
                    {data.allContentfulMain.edges.map((edge) => {
                        return  (
                        <div>
                            <Link to={`${edge.node.pageTitle}`}>
                            {edge.node.pageTitle}
                            </Link>
                        </div> 
                           
                        )    
                    })} 
                </div>
                <div class="col-lg-3">
                    <div class="widget">
                    <h6 class="montserrat text-uppercase bottom-line">{data.contentfulHeader.header}</h6>
                    <ul className="recent-posts">
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
                            <p>{data.contentfulContactPage.address} </p>
                            <p>Phone: {data.contentfulContactPage.phone}</p>
                            <p>E-mail: <a href="mailto:support@neomax.com">{data.contentfulContactPage.email}</a></p>  
                        </address>
                    </div>
                </div>
                <div className="col-sm-4">
                <h6 class="montserrat text-uppercase bottom-line">JOIN OUR MAILING LIST</h6>
                <form id="contact-form" method="post" novalidate>
							<div class="row">

								<div class="col-md-6 form-group">
									<label class="sr-only">First Name</label>
									<input type="text" class="form-control input-lg" name="name" placeholder="First Name" value="" required="" />
									<p class="help-block text-danger"></p>
								</div>

								<div class="col-md-6 form-group">
									<label class="sr-only">Last Name</label>
									<input type="text" class="form-control input-lg" name="lastname" placeholder="Last Name" value="" required="" />
									<p class="help-block text-danger"></p>
								</div>

								<div class="col-md-12 form-group">
									<label class="sr-only">E-mail Address</label>
									<input type="email" class="form-control input-lg" name="email" placeholder="E-mail Address" value="" required="" />
									<p class="help-block text-danger"></p>
								</div>

								<div class="col-md-6 text-center">
									<button type="submit" class="btn btn-lg btn-round btn-dark">Submit</button>
								</div>
                                <div class="col-md-6 text-center">
									<button type="reset" class="btn btn-lg btn-round btn-dark">Clear</button>
								</div>

							</div>
						</form> 
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