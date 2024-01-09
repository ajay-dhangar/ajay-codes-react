import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #432f5add;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #262626;
  letter-spacing: 3px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-shadow: 1px 1px 2px #262626;
`;

const LogoText = styled.div`
  color: rgb(255, 98, 0);
  letter-spacing: 2px;
  transform: translateY(-10px);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  ${LogoContainer}:hover & {
    transform: translateY(0);
    color: #fff700;
  }
`;

const LogoSubtext = styled.div`
  font-size: 1.3rem;
  color: #fff700;
  letter-spacing: 1px;
  opacity: 0.8;
  transform: translateY(10px);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  ${LogoContainer}:hover & {
    transform: translateY(0);
    color: rgb(255, 98, 0);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: #333;
    text-align: center;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    z-index: 1; /* Ensure it appears above other content */
  }
`;

const NavLinkItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  -webkit-text-stroke: 1px #262626;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#333" : "#a8ef18")};
  }
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: #333;
    text-align: center;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    z-index: 1; /* Ensure it appears above other content */
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavLink to="/ajay-codes-react" onClick={handleNavLinkClick}>
      <LogoContainer>
        <LogoText>Ajay</LogoText>
        <LogoSubtext>CodesReact</LogoSubtext>
      </LogoContainer>
      </NavLink>
      
      {!isMenuOpen ? (
        <MenuIcon onClick={handleMenuClick}>&#9776;</MenuIcon>
      ) : (
        <CloseIcon onClick={handleMenuClick}>&#10006;</CloseIcon>
      )}
      <MobileMenu isOpen={isMenuOpen}>
        <NavLinks isOpen={isMenuOpen}>
          <NavLinkItem>
            <NavLink to="/ajay-codes-react/home" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/ajay-codes-react/courses" onClick={handleNavLinkClick}>
              Courses
            </NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/ajay-codes-react/about" onClick={handleNavLinkClick}>
              About
            </NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/ajay-codes-react/contact" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </NavLinkItem>
        </NavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
