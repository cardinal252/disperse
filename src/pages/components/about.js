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
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Suscipit tellus mauris a diam maecenas sed. Malesuada fames ac turpis egestas maecenas. Turpis tincidunt id aliquet risus feugiat. Enim blandit volutpat maecenas volutpat. Vitae et leo duis ut diam quam nulla. Dictum non consectetur a erat nam at lectus urna duis. Dignissim convallis aenean et tortor at risus viverra. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Pretium nibh ipsum consequat nisl vel. Nisl suscipit adipiscing bibendum est ultricies integer. Quam lacus suspendisse faucibus interdum posuere lorem. Augue eget arcu dictum varius duis at consectetur lorem. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Netus et malesuada fames ac. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Egestas sed tempus urna et pharetra pharetra. Sit amet facilisis magna etiam tempor orci eu. Proin nibh nisl condimentum id. A arcu cursus vitae congue. Viverra ipsum nunc aliquet bibendum enim.</p>
                            <p>Interdum consectetur libero id faucibus nisl tincidunt eget. Dui nunc mattis enim ut. Sapien eget mi proin sed libero enim sed faucibus. Maecenas sed enim ut sem viverra aliquet eget sit. Libero volutpat sed cras ornare arcu dui. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Integer enim neque volutpat ac tincidunt vitae semper. Fusce id velit ut tortor. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Semper viverra nam libero justo. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Senectus et netus et malesuada fames ac. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Libero justo laoreet sit amet cursus sit amet dictum. Mollis nunc sed id semper risus.</p>
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