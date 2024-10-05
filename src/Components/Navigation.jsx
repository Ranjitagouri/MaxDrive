import React, { useState } from 'react';
import styled from 'styled-components';
import maxdriveLogo from '../image/maxdrive.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff; /* Changed background color to black */
  color: #fff; /* Changed text color to white */
  position: fixed; /* Fixed positioning */
  top: 0; /* Fix it to the top of the viewport */
  left: 0; /* Align it to the left edge */
  right: 0; /* Align it to the right edge */
  z-index: 1000; /* Ensure it's above other content */
  font-family: sans-serif;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  @media (max-width: 425px) {
    flex-direction: row;
    padding: 5px;
  }
`;


const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  .logo-img {
    max-height: 400%;
    height: 200px;
    width: auto;
     margin-left: 50px;
  }

  @media (max-width: 425px) {
    height: 70px;
    width: 200px;

    .logo-img {
      width: 150px;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 425px) {
    display: flex;
    padding-right: 25px;
  }
  .line {
    width: 25px;
    height: 3px;
    background-color: #000; /* Changed hamburger menu line color to white */
    margin: 4px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 10px;
  opacity: 1;
  margin-right:80px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    color:white;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    gap: 5px;

    &.show {
      display: flex;
    }
  }

  @media (max-width: 425px) {
    &.show {
      height: auto;
      line-height: 1.2;
      background: #e2dadade;
      top: 80px;
    }
  }

  a {
    text-decoration: none;
    color: #000; /* Changed link color to white */
    font-size: 15px;
    margin: 10px 5px;
   
 
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav className={`one ${showMenu ? 'show-menu' : ''} fixed w-full top-0 left-0 bg-white shadow-md z-10`}>
      <Logo className="logo">
        <img
          src={maxdriveLogo}
          alt="Maxdrive"
          className="logo-img"
        />
      </Logo>

      <Hamburger className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </Hamburger>

      <NavLinks className={`nav-links ${showMenu ? 'show' : ''}`}>
      <a href='/'>Home</a>
        <a href="/vehicle-verify">Warranty check</a>
        <a
          href="https://mymotokart.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
        <a href="/award">Award</a>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
