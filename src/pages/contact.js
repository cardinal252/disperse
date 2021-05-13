import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
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


const ContactPage = () => {
  const data = useStaticQuery(
    graphql
      `query {
        page: contentfulContactPage(id: {eq: "77e8e669-7cba-58c2-b83c-2ad7d3769bcb"}) {
          browserTitle
          title
          address 
          email
          phone
          companyInfo {
            companyInfo
          }
          formTitle
          formIntro {
            internal {
              content
            }
          }             
        }
      }`
  );
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className="contact">{data.page.title}</h1>
      <div className="container pt90 pb50">
        <div className="row">
          <div className="col-md-6 mb40">
            <h4 className="text-uppercase">Address</h4>
            <p>{this.data.page.address}</p>
            <h4 className="text-uppercase">Email</h4>
            <p>
              <Link to="/">{this.data.page.email}</Link></p>
            <h4 className="text-uppercase">Phone</h4>
            <p>
              <Link to="/">{this.data.page.phone}</Link></p>
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
            <h2>{this.data.page.formTitle}</h2>
            <p>{this.data.page.formIntro.internal.content}</p>
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
    </Layout>
  );
}

export default ContactPage
