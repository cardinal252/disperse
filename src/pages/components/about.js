import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import HolderImg from '../../images/iphone-3.png'

const About = () => {

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
                     <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Suscipit tellus mauris a diam maecenas sed. Malesuada fames ac turpis egestas maecenas. Turpis tincidunt id aliquet risus feugiat. Enim blandit volutpat maecenas volutpat.</h2>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Pretium nibh ipsum consequat nisl vel. Nisl suscipit adipiscing bibendum est ultricies integer. Quam lacus suspendisse faucibus interdum posuere lorem. Augue eget arcu dictum varius duis at consectetur lorem. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Netus et malesuada fames ac. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Egestas sed tempus urna et pharetra pharetra. Sit amet facilisis magna etiam tempor orci eu. Proin nibh nisl condimentum id. A arcu cursus vitae congue. Viverra ipsum nunc aliquet bibendum enim.</p>
                            <p>Interdum consectetur libero id faucibus nisl tincidunt eget. Dui nunc mattis enim ut. Sapien eget mi proin sed libero enim sed faucibus. Maecenas sed enim ut sem viverra aliquet eget sit. Libero volutpat sed cras ornare arcu dui. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Integer enim neque volutpat ac tincidunt vitae semper. Fusce id velit ut tortor. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Semper viverra nam libero justo. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Senectus et netus et malesuada fames ac. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Libero justo laoreet sit amet cursus sit amet dictum. Mollis nunc sed id semper risus.</p>
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