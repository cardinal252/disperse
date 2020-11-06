import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'

const About = () => {

  return (
        <>
        <div class='container-fluid no-padding mb40'>
            <div class='row pt40 no-margin'>
                <div class='col-lg-8  mr-auto ml-auto'>
                    <div class="title-heading1 mb30">
                        <h3>About Us</h3>
                    </div>
                     <p class='lead mb50 text-center'>
                         Combining over 20 years of experience, spanning various softwares, applications and multiple MVP awards within the devops and the content management community, Cardinal Tech can push your online business to unseen heights. Delivering faster, more efficient workflow, integration and deployment. 
                         Enabling your business to not only reach, but exceed your expectations. Our goal is to help you achieve this by increasing the rate of content delivery, ease of deployment and improving overall congruity between your whole organisation. This enables a consistently quicker, more agile and robust deployment.
                         Within an ever changing online market, deployment revitialision will ultimately improve customer satisfaction by getting your ideas to market quicker and more reliably to enable you to remain at the top of your field.
                     </p>
                </div>
            </div>
            <div class='container-fluid no-padding mb40'>
                <div class='row no-margin'>
                    <div class='col-lg-8  mr-auto ml-auto'>
                        <div class="title-heading1 mb30">
                            <h3>Why Choose Us</h3>
                        </div>
                        <p class='lead mb50 text-center'>
                            As well as ensuring customer satisfaction through constant deployment and integration, Cardinal Tech strives to maximise resource usage in order to minimise costs and deployment failure, via server utilisation as well as informed and intelligent decisions during setup.
                            Freeing up more of your resources for feature development and expansion. Combined with less deployment time and greater utilisation, we are able to minimise your running costs, freeing up future capital to invest back into your business.
                            Overall Cardinal Tech will provide expert, collaborative, technical strategies and implementation, in order to minimise release time, ensure release reliability, whilst maximising resource utilisation.
                            Ultimately improving customer experience, speed to market and maximising revenue
                        </p>
                    </div>
                </div>
                <div class="row special-feature">
                    <div class="col-md-3 col-sm-6 margin20">
                        <div class="s-feature-box text-center">
                            <div class="mask-top">
                            <i></i>
                            <h4>Experience</h4>
                        </div>
                        <div class="mask-bottom">
                            <i></i>
                            <h4>Experience</h4>
                            <p>20 years of experience, Various softwares, applications and multiple MVP awards within the devops and the content management community, Push your business to new heights.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 margin20">
                    <div class="s-feature-box text-center">
                        <div class="mask-top">
                            <i></i>
                            <h4>Collaborative</h4>
                        </div>
                        <div class="mask-bottom">
                            <i></i>
                            <h4>Collaborative</h4>
                            <p>On site as well as remote support, latest of conferencing and VOIP practices, We will deliver elite level tailored solutions and support over various platforms.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 margin20">
                    <div class="s-feature-box text-center">
                        <div class="mask-top">
                            <i></i>
                            <h4>Technical Knowledge</h4>
                        </div>
                        <div class="mask-bottom">
                            <i></i>
                            <h4>Technical Knowledge</h4>
                            <p>With experience from development and integration, to deployment. Cardinal tech is able to deliver elite one-to-one, individual architectural solutions for your company's needs.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 margin20">
                    <div class="s-feature-box text-center">
                        <div class="mask-top">
                            <i></i>
                            <h4>Resource optimisation</h4>
                        </div>
                        <div class="mask-bottom">
                            <i></i>
                            <h4>Resource optimisation</h4>
                            <p>Ensuring customer satisfaction through constant deployment and integration, Cardinal Tech strives to maximise resource usage in order to minimise costs and deployment failure,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div class="bg-primary pt0 pb10">
        <div class="container mb120">
            <Testimonials />         
        </div>
    </div>    
    </>    
    )  
}

export default About