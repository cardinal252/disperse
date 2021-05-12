import React from 'react'
import "./HeroSection.css"

class HeroSection extends React.Component {
    render() {
        return(
            <div className="hero-container pt60">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.heroSubtitle }</p> 
            </div>
        )
    }
}

export default HeroSection 