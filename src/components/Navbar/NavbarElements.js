import styled from 'styled-components'
import { Link } from "gatsby"

export const Nav = styled.nav`
    background: #000000;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        background: #000000;
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;   
`

export const NavLogo = styled(Link)`
    color: #141414;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center; 
    margin-left: 25px;   
`

export const NavIcon = styled(Link)`
    margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;  
    background-color: #050505; 

    @media screen and (max-width: 960px) {
        top: -100px;
        transition: 0.8s all ease;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;

        top: ${({ click }) => (click ? "100%" : "-1000px") };
            opacity: 1;
            transition: all 0.2s ease;
            background: #292d3e;
    }
 `  
 
 export const NavLinks = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center; 
    padding: 0.5rem 1rem; 
    height: 100%; 

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #fff;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        width: 100%
    }
` 

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: right;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;

    @media screen and (max-width: 820px) {
        flex-direction:column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25px; 
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    padding: 0.5rem;
`
