import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./NavbarElements"
import Logo from '../../images/logo-black.png'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click) 

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

  return (
      <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <Nav active={scroll} click={click}>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={Logo} alt="disperse" /> 
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                 
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/about">News</NavLinks>       
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/portfolio">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
      </>
  )  
}

export default Navbar