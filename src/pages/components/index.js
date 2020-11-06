import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Image1 from "../../images/con1.jpg"

const Main = () => {

return (
    <>
        <div class="container">
            <div class='row'>
                <div class='col-md-4 mb40'>
                    <img src={Image1} alt='' class='img-fluid center-img shadow-card mb30' />
                    <h5 class='text-uppercase'>News 1</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.  
                    </p>
                </div>
                <div class='col-md-4 mb40'>
                    <img src={Image1} alt='' class='img-fluid center-img shadow-card mb30' />
                    <h5 class='text-uppercase'>News 2</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque. 
                    </p>
                </div>
                <div class='col-md-4 mb40'>
                    <img src={Image1} alt='' class='img-fluid center-img shadow-card mb30' />
                    <h5 class='text-uppercase'>News 3</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque. 
                    </p>
                </div>
            </div>
        </div>
        <div class='container'>
                <div class='row align-items-center'>
                    <div class='col-md-4 mb30'>
                        <div class='section-title title-left mb30'>
                            <span class="section-subTitle">what we do</span>
                            <h3 class='mb0'>
                                Our services
                            </h3>
                        </div>
                        <p class='lead'>
                            We provide the best customer service to our customers
                        </p>
                        <a data-scroll href='#portfolio' class='btn btn-outline-secondary'>Learn More</a>
                    </div>
                    <div class='col-md-7 ml-auto'>
                        <div class='row'>
                            <div class='col-md-6 mb30 text-center'>
                                <i class='icon-pictures fa-3x mb20 text-primary'></i>
                                <h5 class='text-uppercase mb20'>What We Do 1</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.
                                </p>
                            </div>
                            <div class='col-md-6 mb30 text-center'>
                                <i class='icon-toolbox fa-3x mb20 text-primary'></i>
                                <h5 class='text-uppercase mb20'>What We Do 2</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.
                                </p>
                            </div>
                            <div class='col-md-6 mb30 text-center'>
                                <i class='icon-search fa-3x mb20 text-primary'></i>
                                <h5 class='text-uppercase mb20'>What We Do 3</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.
                                </p>
                            </div>
                            <div class='col-md-6 mb30 text-center'>
                                <i class='icon-lightbulb fa-3x mb20 text-primary'></i>
                                <h5 class='text-uppercase mb20'>What We Do 4</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )  
}

export default Main