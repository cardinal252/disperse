import React from 'react'
import "./HeroSection.css"
import { Button } from '../ButtonElements'

function HeroSection() {
    return (
        <div className="hero-container pt60">
            <h2>DISPERSE</h2>
            <p>telecommunications & Support</p> 
            <div class="container">
                <div class="row center">
                    <div class="col-lg-3" />
                    <div class="btn col-lg-3">
                        <Button to='/about'>How We Can Help</Button>
                    </div>
                    <div class="btn col-lg-3">
                        <Button to='/'>Get Started</Button>
                    </div> 
                    <div class="col-lg-3" />
                </div>    
            </div>
        </div>
    )
}

export default HeroSection 