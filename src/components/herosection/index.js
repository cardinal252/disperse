import React from 'react'

class HeroSection extends React.Component {
    render() {
        return(
            <div className="hero-container pt60" style={{backgroundImage: 'url(\'' + this.props.heroImage + '\')'}} >
                <h2>{ this.props.title }</h2>
                <p>{ this.props.heroSubtitle }</p> 
            </div>
        )
    }
}

export default HeroSection 