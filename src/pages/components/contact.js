import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/MainElements.css'
import '../../smart-form/contact/css/smart-forms.css'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faSkype,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faUser,
    faEnvelope,
    faComment,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const data = useStaticQuery(graphql`
    query {
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
    <>
        <div className="container pt90 pb50">
            <div className="row">
                <div className="col-md-6 mb40">
                    <h4 className="text-uppercase">Address</h4>
                    <p>
                    {data.contentfulContactPage.address}    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4 className="text-uppercase">Email</h4>
                    <p>
                        <Link to="/">{data.contentfulContactPage.email}</Link></p>
                    <h4 className="text-uppercase">Phone</h4>
                    <p>
                        <Link to="/">{data.contentfulContactPage.phone}</Link></p>
                        <h4 className="text-uppercase">Social</h4>
                    <div className="clearfix pt10">
                        <Link to="#" class="social-icon si-border si-facebook">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      
                        </Link>
                        <Link to="#" className="social-icon si-border si-twitter">
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                      
                        </Link>
                        <Link to="#" className="social-icon si-border si-g-plus">
                        <FontAwesomeIcon icon={faGooglePlus} size="1x" />
                        
                        </Link>
                        <Link to="#" className="social-icon si-border si-skype">
                        <FontAwesomeIcon icon={faSkype} size="1x" />
                        
                        </Link>
                        <Link to="#" className="social-icon si-border si-linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                       
                        </Link>
                    </div>    
                        <div className="smart-forms pt20">
                            <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
                               
                                    <h4>Join Our Mailing List :</h4>
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <input type="text" name="sendername" id="sendername" className="gui-input" placeholder="Enter name" />
                                            <span className="field-icon"><FontAwesomeIcon icon={faUser} size="1x" /></span>  
                                        </label>
                                    </div>
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <input type="email" name="emailaddress" id="emailaddress" className="gui-input" placeholder="Email address" />
                                            <span className="field-icon"><FontAwesomeIcon icon={faEnvelope} size="1x" /></span>
                                        </label>
                                    </div>
                                    
                                    <div className="result"></div>                                                                         
                               
                                <div>
                                    <button type="submit" data-btntext-sending="Sending..." className="button btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>    
                </div>
                <div className="col-md-6 pb40">
                <h2>Nice to hear from you</h2> 
                    <p>
                        Suspendisse ut interdum lectus. Integer ac neque faucibus, venenatis nisl quis, pellentesque lacus. Integer et ipsum sit amet dui ultrices hendrerit. Pellentesque leo massa, suscipit a felis non, posuere convallis velit. Sed tincidunt lacinia velit et aliquam.
                    </p>
                    <div className="smart-wrap">
                        <div className="smart-forms smart-container">
                            <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
                                <div className="form-body">
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <input type="text" name="sendername" id="sendername" className="gui-input" placeholder="Enter name" />
                                            <span className="field-icon"><FontAwesomeIcon icon={faUser} size="1x" /></span>  
                                        </label>
                                    </div>
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <input type="email" name="emailaddress" id="emailaddress" className="gui-input" placeholder="Email address" />
                                            <span className="field-icon"><FontAwesomeIcon icon={faEnvelope} size="1x" /></span>
                                        </label>
                                    </div>
                                    
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <input type="text" name="sendersubject" id="sendersubject" className="gui-input" placeholder="Enter subject" />
                                            <span className="field-icon"><FontAwesomeIcon icon={faLightbulb} size="1x" /></span>
                                        </label>
                                    </div>
                
                                    <div className="section">
                                        <label className="field prepend-icon">
                                            <textarea className="gui-textarea" id="sendermessage" name="sendermessage" placeholder="Enter message"></textarea>
                                            <span className="field-icon"><FontAwesomeIcon icon={faComment} size="1x" /></span>
                                            <span className="input-hint"> <strong>Hint:</strong> Please enter between 80 - 300 characters.</span>   
                                        </label>
                                    </div>
                
                                    <div className="result"></div>                                                                         
                                </div>
                                <div className="form-footer">
                                    <button type="submit" data-btntext-sending="Sending..." className="button btn btn-primary">Submit</button>
                                    <button type="reset" className="button"> Reset </button>
                                </div>
                            </form>
                        </div>    
                    </div>
                </div>    
            </div> 
        </div>                   
    </>
    )  
}

export default Contact  