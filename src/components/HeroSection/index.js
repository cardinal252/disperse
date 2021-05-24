import React from 'react'
import "./HeroSection.css"

class HeroSection extends React.Component {
    render() {

        return(
            <div className="hero-container" style={{backgroundImage: `url(${this.props.topBanHome})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} pt60>
                <h2>{ this.props.title }</h2>
                <p>{ this.props.subTitle }</p> 
            </div>
        )
    }
}

export default HeroSection 