import React from "react";
import PropTypes from "prop-types";
import Footer from "./navigation/footer";
import Navbar from "./navigation/navbar";

const Layout = ({ children }) => {

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <>
        	{/* <div className="page-loader">
                <div className="loader">Loading...</div>
            </div> */}
            <Navbar />
            <div className="wrapper">
                {children}
            </div>            
            <Footer />
            <script src="/assets/js/jquery-2.2.3.min.js"></script>
            <script src="http://maps.googleapis.com/maps/api/js?v=3"></script>
            <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="/assets/js/plugins.min.js"></script>
            <script src="/assets/js/custom.min.js"></script>
        </>
    )
}



export default Layout
