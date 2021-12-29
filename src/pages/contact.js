import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from 'gatsby'
import HeroSection from "../components/herosection"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Contact" />
      <HeroSection title={ data.page.title } subTitle={ data.page.subtitle } heroImage={data.page.heroImage.fluid.src} />      
      <section class="module">
        <div class="container">

          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <div class="module-header text-center">
                <p class="lead divider-line">{data.page.companyInfo.companyInfo}</p>
              </div>
            </div>
          </div>

          <div class="row">

            <div class="col-sm-8 col-sm-offset-2">

              <form id="contact-form" method="post" action="mailto:Enquiries@sjdconsultancy.co.uk"  novalidate>
                <div class="row">

                  <div class="col-md-6 form-group">
                    <label class="sr-only">First Name</label>
                    <input type="text" class="form-control input-lg" name="name" placeholder="First Name" value="" required=""/>
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="col-md-6 form-group">
                    <label class="sr-only">Last Name</label>
                    <input type="text" class="form-control input-lg" name="lastname" placeholder="Last Name" value="" required=""/>
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="col-md-12 form-group">
                    <label class="sr-only">E-mail Address</label>
                    <input type="email" class="form-control input-lg" name="email" placeholder="E-mail Address" value="" required=""/>
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="col-md-12 form-group">
                    <textarea class="form-control input-lg" rows="7" name="message" placeholder="Message*" required=""></textarea>
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="col-md-12 text-center">
                    <button type="submit" class="btn btn-lg btn-round btn-dark">Send Email</button>
                  </div>

                </div>
              </form>

              <div id="contact-response" class="ajax-response text-center"></div>

            </div>

          </div>

        </div>
      </section>      
    </Layout>
  );
}

export const query = graphql`
    query {
      page: contentfulContactPage {
        browserTitle
        title
        address 
        email
        phone
        companyInfo {
          companyInfo
        }
        heroImage {
          fluid {
              src
          }
        }        
        formTitle
        formIntro {
          internal {
            content
          }
        }             
      }
    }`;

export default ContactPage
