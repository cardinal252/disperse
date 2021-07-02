
import React from "react"
import PropTypes from "prop-types"
import Footer from "../Footer"
import "../../hooks/mountScript"


import Navbar from "../Navbar"
import "./layout.css"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}  

const Layout = ({ children }) => {
 

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      addScript("/assets/js/jquery-2.2.3.min.js")
      addScript("/assets/js/plugins.js")
      addScript("/assets/js/bootstrap.min.js")
      addScript("/assets/js/custom.min.js")  
  }
    </>
  )
}



export default Layout
