import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialIcons, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights } from "./FooterElements"
import Logo from '../../images/logo-black.png'
import News from '../../images/con1.jpg'
import './style.css'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAboutPage {
            aboutTop {
                aboutTop  
            }
            aboutBody {
                aboutBody
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
                    <ul class="list-unstyled list-links">
                        <li>
                            <a href="#!">What We Do 1</a>
                        </li>
                        <li>
                            <a href="#!">What We Do 2
                                {/* <span class="badge rounded bg-secondary text-white d-inline-block ml-2">18</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="#!">What We Do 3</a>
                        </li>
                        <li>
                            <a href="#!">What We Do 4</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb30">
                    <h5>Latest News</h5>
                    <ul class="list-unstyled list-links">
                        <li class="media">
                            <img src={News} class="img-fluid" alt="" />
                            <div class="media-body">
                                <a href="#!">News 1
                                    <small class="text-muted d-block">on 12 June 2018</small>
                                </a>
                            </div>
                        </li>

                        <li class="media">
                            <img src={News} class="img-fluid" alt="" />
                            <div class="media-body">
                                <a href="#!">News 2
                                    <small class="text-muted d-block">on 02 Sep. 2018</small>
                                </a>
                            </div>
                        </li>
                        <li class="media">
                            <img src={News} class="img-fluid" alt="" />
                            <div class="media-body">
                                <a href="#!">News 3
                                    <small class="text-muted d-block">on 17 October 2018</small>
                                </a>
                            </div>
                        </li>
                    </ul>
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