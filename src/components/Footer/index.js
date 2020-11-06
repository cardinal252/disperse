import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialIcons, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights } from "./FooterElements"
import Logo from '../../images/logo-black.png'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <img src={Logo} alt="cardinaltech" />
                </SocialLogo>
                <WebsiteRights>
                    disperse © {new Date().getFullYear()} 
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                </SocialIcons>    
            </SocialMediaWrap>
        </FooterContainer>
    )
}

export default Footer