import styled from 'styled-components'
import { CNavbar, COffcanvas, CNavbarToggler, CNavLink, CNavItem } from '@coreui/react'

export const StyledNavbar = styled(CNavbar)` //Navbar
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: transparent;
    transition: backdrop-filter 0.3s, background-color 0.3s;
    padding-right: 40px;

    &.scrolled {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
`;

export const Item = styled(CNavItem)` //Navbar

    .darkMode{  //Darkmode Button
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    margin: 0;
    padding: 8px 12px;
    color: ${({ theme }) => theme.text};
    font-size: 15px;
    transition: 0.5s all;

    &:hover{ //Effect
    background-color: #fff;
    color: ${({ theme }) => theme.primaryColor};
    } 
    }
`;

export const StyledOffcanvas = styled(COffcanvas)` //Offcanvas
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    width: 50% !important;
    max-height: 100vh;

    @media (max-width: 768px) { //Responive
    width: 70% !important;
    }

    .nav-link { //Link
    color: #fff !important;
    }
`;

export const StyledNavbarToggler = styled(CNavbarToggler)` //Navbar
    border: none !important;
    background: transparent !important;

    .navbar-toggler-icon { //Navbar
    background-image: none;
    position: relative;
    width: 25px;
    height: 2px;
    background-color: white;
    }

    .navbar-toggler-icon::before,
    .navbar-toggler-icon::after { //Navbar
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: white;
    transition: all 0.3s;
    }

    .navbar-toggler-icon::before { //Navbar
    top: -7px;
    }

    .navbar-toggler-icon::after { //Navbar
    top: 7px;
    }
`;

export const StyledNavLink = styled(CNavLink)` //Navbar
    color: ${({ theme }) => theme.text};

    &:hover{ //Effect
    color: ${({ theme }) => theme.primaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
    }
`;

