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
                    <h5 class='text-uppercase'>Creative Solutions</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque.  
                    </p>
                </div>
                <div class='col-md-4 mb40'>
                    <img src={Image1} alt='' class='img-fluid center-img shadow-card mb30' />
                    <h5 class='text-uppercase'>leading staff</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque. 
                    </p>
                </div>
                <div class='col-md-4 mb40'>
                    <img src={Image1} alt='' class='img-fluid center-img shadow-card mb30' />
                    <h5 class='text-uppercase'>Modern frameworks</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque. 
                    </p>
                </div>
            </div>
        </div>

    </>
    )  
}

export default Main