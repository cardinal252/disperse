import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import '../components/template.css'
import Image1 from "../../images/con1.jpg"

const Main = () => {

return (
    <>
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
            <div class="container">

				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<div class="module-header text-center">
							<h2 class="montserrat text-uppercase">Our news</h2>
							<p class="lead divider-line">Read fresh news in our blog.</p>
						</div>
					</div>
				</div>

				<div class="row multi-columns-row post-columns">

					<div class="col-sm-4 col-md-4 col-lg-4">
						<article class="post format-image bg-white">
							<div class="post-preview">
								<a href="#"><img src={Image1} alt="" /></a>
							</div>
							<div class="post-content">
								<h2 class="post-title"><a href="#">News 1</a></h2>
								<ul class="post-meta">
									<li>October 24, 2015</li>
									<li>By <a href="#">Benson</a></li>
								</ul>
								<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
								<a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
							</div>
						</article>
					</div>
					
					<div class="col-sm-4 col-md-4 col-lg-4">
						<article class="post format-image bg-white">
							<div class="post-preview">
								<a href="#"><img src={Image1} alt="" /></a>
							</div>
							<div class="post-content">
								<h2 class="post-title"><a href="#">News 2</a></h2>
								<ul class="post-meta">
									<li>October 24, 2015</li>
									<li>By <a href="#">Benson</a></li>
								</ul>
								<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
								<a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
							</div>
						</article>
					</div>
				
                    <div class="col-sm-4 col-md-4 col-lg-4">
						<article class="post format-image bg-white">
							<div class="post-preview">
								<a href="#"><img src={Image1} alt="" /></a>
							</div>
							<div class="post-content">
								<h2 class="post-title"><a href="#">News 3</a></h2>
								<ul class="post-meta">
									<li>October 24, 2015</li>
									<li>By <a href="#">Benson</a></li>
								</ul>
								<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
								<a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
							</div>
						</article>
					</div>
					

				</div>

				<div class="row">
					<div class="col-sm-12">
						<div class="text-center m-t-35">
							<a href="#">Read all news</a>
						</div>
					</div>
				</div>

			</div>
    </>
    )  
}

export default Main