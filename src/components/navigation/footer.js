import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Footer = () => {
    const data = useStaticQuery(graphql`
		query {
            footer: contentfulFooter {
                leftHeader
                leftText {
                    raw
                }
                centreHeader
                rightHeader
            }
            contact: contentfulContactPage {
                address
                email
                phone
            } 
		}
	`);

    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="widget">
                    <h6 className="montserrat text-uppercase bottom-line">{data.footer.leftHeader}</h6>
                    {renderRichText(data.footer.leftText)}
                    {/* <ul className="recent-posts">
                        {data.allContentfulMain.edges.map((edge) => {
                            return  (
                            <li key={edge.node.id}>
                                <div className="row">
                                    <div className="col-md-3 widget-posts-image">
                                        <img src={edge.node.icon.resize.src} alt={edge.node.pageTitle} />
                                    </div>
                                    <div className="col-md-8 widget-posts-body">
                                        <Link to={`${edge.node.pageTitle}`}>   
                                            <h6>{edge.node.pageTitle}</h6>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            )    
                        })} 
                    </ul> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="widget">
                    <h6 className="montserrat text-uppercase bottom-line">{data.footer.centreHeader}</h6>
                    {/* <ul className="recent-posts">
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return  (
                            <li key={edge.node.id}>
                                <div className="row">
                                    <div className="col-md-3 widget-posts-image">
                                        <img src={edge.node.media.resize.src} alt={edge.node.title} />
                                    </div>
                                    <div className="col-md-8 widget-posts-body">
                                        <Link to={`/news/${edge.node.slug}`}>   
                                            <h6>{edge.node.title}</h6>
                                            <p>{edge.node.publishedDate}</p>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            )    
                        })} 
                    </ul> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                        <h6 className="montserrat text-uppercase bottom-line">{data.footer.rightHeader}</h6>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="widget">
                                        
                                        <address className="map-background">
                                            <h6 className="text-uppercase">Address</h6>
                                            <p>{data.contact.address}</p>
                                        </address>
                                    </div>
                                </div> 
                                <div className="col-lg-6">
                                    <div className="widget">
                                        <address className="map-background">
                                            <h6 className="text-uppercase">Phone</h6>
                                            <p>{data.contact.phone}</p>
                                            <h6 className="text-uppercase">Email</h6>
                                            <p><Link to="mailto:support@neomax.com">{data.contact.email}</Link></p>
                                        </address>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                        {/* <div className="col-lg-6 clearfix">
                            <h4 className="text-uppercase">Social</h4>
                        </div> 
                        <div className="col-lg-6 clearfix social">
                                <Link to="#" className="social-icon si-facebook">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            
                                </Link>
                                <Link to="#" className="social-icon si-border si-twitter">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            
                                </Link>
                                <Link to="#" className="social-icon si-border si-g-plus">
                                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                                
                                </Link>
                                <Link to="#" className="social-icon si-border si-skype">
                                <FontAwesomeIcon icon={faSkype} size="2x" />
                                
                                </Link>
                                <Link to="#" className="social-icon si-border si-linkedin">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            
                                </Link>
                        </div>          */}
                    </div>    
                    <div className="row">
                        <div className="col-lg-12 smart-forms">
                    
                    
                            <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
            
                                {/* <div className="section pt10">
                                    <label className="field prepend-icon">
                                        <input type="email" name="emailaddress" id="emailaddress" className="gui-input" placeholder="Join Our Mailing List" />
                                        <span className="field-icon"><FontAwesomeIcon icon={faEnvelope} size="1x" /></span>
                                        <span className="field-button append-icon" ><button type="submit" data-btntext-sending="Sending..." className="button btn btn-primary">Submit</button></span>
                                    </label>
                                </div> */}
                                
                                                                    
                            </form>
                        </div>
                    </div>    
                </div>                    
            </div>
            <div className="row">
                <div className="col-lg-6 mr-auto ml-auto">
                © Copyright {new Date().getFullYear()} SJD
                
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer