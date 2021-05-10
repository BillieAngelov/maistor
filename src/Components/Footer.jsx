import React from "react";
import styled from "styled-components";
import { LogoWrapper, NavContainer, Logo } from "./Header/Header";

// import logo from "../assets/logo/logo.png";
// import fbIcon from "../assets/icons/fb-icon.svg";
// import igIcon from "../assets/icons/ig-icon.svg";
// import linIcon from "../assets/icons/lin-icon.svg";
// import twIcon from "../assets/icons/tw-icon.svg";
// import ytIcon from "../assets/icons/yt-icon.svg";

const FooterContainer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 998;
`;

const IconContainer = styled.div`
  display: flex;
`;
const FooterIcon = styled.img`
  padding: 0 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavContainer>
        <LogoWrapper>
          <Logo>
            <img src="/logo/logo.png" alt="Logo" />
          </Logo>
        </LogoWrapper>

        <IconContainer>
          <FooterIcon src="/icons/fb-icon.svg" alt="Facebook" />
          <FooterIcon src="/icons/ig-icon.svg" alt="Instagram" />
          <FooterIcon src="/icons/lin-icon.svg" alt="LinkedIn" />
          <FooterIcon src="/icons/tw-icon.svg" alt="Tweeter" />
          <FooterIcon src="/icons/yt-icon.svg" alt="Youtube" />
        </IconContainer>
      </NavContainer>
    </FooterContainer>
  );
};

export default Footer;
