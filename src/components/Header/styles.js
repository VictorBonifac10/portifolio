import styled from 'styled-components'
import { CNavbar, COffcanvas, CNavbarToggler, CNavLink, CNavItem } from '@coreui/react'

export const StyledNavbar = styled(CNavbar)`
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

export const Item = styled(CNavItem)`

  .darkMode{
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

    &:hover{
      background-color: #fff;
      color: ${({ theme }) => theme.blueHighlight};;
    } 
  }
`;

export const StyledOffcanvas = styled(COffcanvas)`
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  width: 50% !important;
  max-height: 100vh;

  @media (max-width: 768px) {
    width: 70% !important;
  }

  .nav-link {
    color: #fff !important;
  }
`;

export const StyledNavbarToggler = styled(CNavbarToggler)`
  border: none !important;
  background: transparent !important;

  .navbar-toggler-icon {
    background-image: none;
    position: relative;
    width: 25px;
    height: 2px;
    background-color: white;
  }

  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: white;
    transition: all 0.3s;
  }

  .navbar-toggler-icon::before {
    top: -7px;
  }

  .navbar-toggler-icon::after {
    top: 7px;
  }
`;

export const StyledNavLink = styled(CNavLink)`
  color: ${({ theme }) => theme.text};

  &:hover{
    color: ${({ theme }) => theme.blueHighlight};
    border-bottom: 2px solid ${({ theme }) => theme.blueHighlight};;
  }
`;

