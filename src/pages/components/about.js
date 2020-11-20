import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import HolderImg from '../../images/iphone-3.png'
import { graphql, useStaticQuery } from 'gatsby'



const About = () => {
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
        <>
        <div class='container-fluid no-padding mb40'>
            <div class="row special-feature">
                <div class="col-md-4 col-sm-6 margin20">
                    <div class="s-feature-box text-center">
                        <div class="mask-top">
                        <i></i>
                        <h4>Title 1</h4>
                    </div>
                    <div class="mask-bottom">
                        <i></i>
                        <h4>Title 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 margin20">
                <div class="s-feature-box text-center">
                    <div class="mask-top">
                        <i></i>
                        <h4>Title 2</h4>
                    </div>
                    <div class="mask-bottom">
                        <i></i>
                        <h4>Title 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 margin20">
                <div class="s-feature-box text-center">
                    <div class="mask-top">
                        <i></i>
                        <h4>Title 3</h4>
                    </div>
                    <div class="mask-bottom">
                        <i></i>
                        <h4>Title 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div class='row pt40 no-margin'>
                <div class='col-lg-8  mr-auto ml-auto'>
                     <p class='title-heading1 mb50 text-center'>
                     <h2>{data.contentfulAboutPage.aboutTop.aboutTop}</h2>
                     </p>
                </div>
            </div>
            <div class='container-fluid no-padding mb40'>
                <div class='row no-margin'>
                    <div class='col-lg-4  mr-auto ml-auto'>
                        <div class="title-heading1 mb30">
                            <h3>Why Choose Us</h3>
                        </div>
                        <p class='lead mb50 text-center'>
                            <p>{data.contentfulAboutPage.aboutBody.aboutBody}</p>
                        </p>
                    </div>
                    <div class='col-lg-4  mr-auto ml-auto'>
                        <p class='lead mb50 text-center'>
                            <img src={HolderImg} alt="/" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div class="pt0 pb0">
        <div class="container mb120">
            <Testimonials />         
        </div>
    </div>    
    </>    
    )  
}

export default About