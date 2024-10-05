

import React, { useState } from 'react';
import styled from 'styled-components';
import BgVideo from '../image/video.gif';
import LeftImage from '../image/leftImage.png';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
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

  @media (max-width: 320px) {
    background-color: transparent;
  }
`;

const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  .logo-img {
    max-height: 300%;
    height: auto;
    width: 167px;
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
    background-color: #000;
    margin: 4px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 85px;

  @media (max-width: 768px) {
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    gap: 5px;
  }

  @media (max-width: 320px) {
    background-color: transparent;

    a {
      color: #fff;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
  }
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
  overflow-clip-margin: content-box;
  overflow: clip;

  @media (min-width: 320px) {
    margin-top: 70px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 90vh;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  max-height: 100%;
  }

  @media (min-width: 768px) {
    max-height: 680px; /* Adjusted for tablet and larger screens */
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const FooterContainer = styled.div`
  background-color: #ff9800;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #ff9800;
  color: #ffffff;

  @media (max-width: 320px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;

const Main = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>


      <div className="fullscreen-image-container">
        <FullscreenImage
          src={BgVideo}
          alt="Fullscreen Background"
          className="fullscreen-image"
        />
      </div>


      <MainContent>
        <LeftSection>
          <img src={LeftImage} alt="Left Side" />
        </LeftSection>
        <RightSection>
          <h2>ABOUT US</h2>
          <p>
            Max Drive™, a homegrown brand of Motocross India™, stands out as a pinnacle of lubrication excellence for 4-stroke engines in petrol-powered two-wheelers and three-wheelers. Crafted as MaxDrive 4T 20w40 premium engine oil, it combines highly refined mineral base oils with a proprietary additive system. This formulation not only enhances engine performance but also ensures durability by protecting vital components from friction and heat. Motocross India™'s dedication to quality and innovation shines through Max Drive™, which offers superior lubrication and efficiency across varied environmental conditions. Its advanced formulation maintains engine cleanliness, minimizes wear, and optimizes fuel consumption, making it a trusted choice among professionals and enthusiasts alike. Max Drive™ undergoes rigorous testing to meet stringent quality standards, guaranteeing reliability and consistency in performance. Whether on city roads or rugged landscapes, Max Drive™ continues to set benchmarks in automotive lubrication, ensuring engines run smoothly and efficiently over extended service intervals.
          </p>
          <p className="text-lg font-bold p1">Email : support@maxdrive.in</p>
          <p className="text-lg font-bold p2">Call: 8888222992</p>
        </RightSection>
      </MainContent>

      <FooterContainer>
        <FooterContent>
          
          <p className="text-sm">
            Copyright © 2018-2024. MaxDrive and its trademarks are owned by Motocross India.
          </p>
       
        </FooterContent>
      </FooterContainer>

      
    </>
  );
};

export default Main;
