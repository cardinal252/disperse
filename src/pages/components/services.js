import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import Sketch2 from '../../images/1.jpg'

const Services = () => {
  return (
        <>
            <div class="container mb50">
                <div class="row align-items-center">
                    <div class="col-md-6 mb30">
                        <h3 class="mb20">We offer full time best & quality services</h3>
                        <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul class="list-unstyled list-icon mb20">
                            <li>Cras purus odio</li>
                            <li>vestibulum in vulputate</li>
                            <li>Fusce condimentum nunc</li>
                        </ul>
                        {/* <a href="#" class="btn btn-primary">
                            Learn More
                        </a> */}
                    </div>
                    <div class="col-md-6 mb30">
                        <img src={Sketch2} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
            <div class="bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 pt30 pb30 text-center">
                            <div class="icon-bg">
                                <i class="ti-image fa-4x mb20"></i>
                                <h3>Hosted Services</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                {/* <a href="#" class="btn btn-white-outline">
                                    Learn More
                                </a> */}
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 pt30 pb30 text-center">
                            <div class="icon-bg">
                                <i class="ti-twitter fa-4x mb20"></i>
                                <h3>Engineering & Maintainence</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                {/* <a href="#" class="btn btn-white-outline">
                                    Learn More
                                </a> */}
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 pt30 pb30 text-center">
                            <div class="icon-bg">
                                <i class="ti-bag fa-4x mb20"></i>
                                <h3>Telephone Systems</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                {/* <a href="#" class="btn btn-white-outline">
                                    Learn More
                                </a> */}
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

export default Services