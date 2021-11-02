import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <Helmet title={`${title}`}>
            {/* Favicons */}
            <link rel="shortcut icon" href="assets/images/favicon.png"/>
            <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-touch-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-touch-icon-114x114.png"/>
            
            {/* <!-- Web Fonts --> */}
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,700' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'/>
            
            {/* <!-- Bootstrap core CSS --> */}
            <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            
            {/* <!-- Icon Fonts --> */}
            <link href="/assets/css/font-awesome.min.css" rel="stylesheet"/>
            <link href="/assets/css/simple-line-icons.css" rel="stylesheet"/>
            
            {/* <!-- Plugins --> */}
            <link href="/assets/css/magnific-popup.css" rel="stylesheet"/>
            <link href="/assets/css/owl.carousel.css" rel="stylesheet"/>
            <link href="/assets/css/flexslider.css" rel="stylesheet"/>
            <link href="/assets/css/animate.min.css" rel="stylesheet"/>
            
            {/* <!-- Template core CSS --> */}
            <link href="/assets/css/vertical.min.css" rel="stylesheet"/>
            <link href="/assets/css/template.css" rel="stylesheet"/>
            <link href="/sjd/css/template.css" rel="stylesheet"/>
        </Helmet>
    )
}

export default Head