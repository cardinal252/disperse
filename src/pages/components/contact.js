import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import '../../smart-form/contact/css/smart-forms.css'

const Contact = () => {

return (
    <>
        <div class="container pt90 pb50">
            <div class="row">
                <div class="col-md-6 mb40">
                    <h4 class="text-uppercase">Address</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4 class="text-uppercase">Email</h4>
                    <p>
                        <a href="/">contact@email.com</a></p>
                    <h4 class="text-uppercase">Phone</h4>
                    <p>
                        <a href="/">+120 234-449-3949</a></p>
                    <h4 class="text-uppercase">Company Information</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="col-md-6 pb40">
                    <div class="smart-wrap">
                        <div class="smart-forms smart-container">
                            <form method="post" action="smart-form/contact/php/smartprocess.php" id="smart-form">
                                <div class="form-body">
                                    <div class="section">
                                        <label class="field prepend-icon">
                                            <input type="text" name="sendername" id="sendername" class="gui-input" placeholder="Enter name" />
                                            <span class="field-icon"><i class="fa fa-user"></i></span>  
                                        </label>
                                    </div>
                                    <div class="section">
                                        <label class="field prepend-icon">
                                            <input type="email" name="emailaddress" id="emailaddress" class="gui-input" placeholder="Email address" />
                                            <span class="field-icon"><i class="fa fa-envelope"></i></span>
                                        </label>
                                    </div>
                                    
                                    <div class="section">
                                        <label class="field prepend-icon">
                                            <input type="text" name="sendersubject" id="sendersubject" class="gui-input" placeholder="Enter subject" />
                                            <span class="field-icon"><i class="fa fa-lightbulb-o"></i></span>
                                        </label>
                                    </div>
                
                                    <div class="section">
                                        <label class="field prepend-icon">
                                            <textarea class="gui-textarea" id="sendermessage" name="sendermessage" placeholder="Enter message"></textarea>
                                            <span class="field-icon"><i class="fa fa-comments"></i></span>
                                            <span class="input-hint"> <strong>Hint:</strong> Please enter between 80 - 300 characters.</span>   
                                        </label>
                                    </div>
                
                                    <div class="result"></div>                                                                         
                                </div>
                                <div class="form-footer">
                                    <button type="submit" data-btntext-sending="Sending..." class="button btn btn-primary">Submit</button>
                                    <button type="reset" class="button"> Reset </button>
                                </div>
                            </form>
                        </div>    
                    </div>
                </div>    
            </div> 
        </div>                   
    </>
    )  
}

export default Contact  