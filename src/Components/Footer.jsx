import React from "react";
import styled from "styled-components";
import { LogoWrapper, NavContainer, Logo } from "./Header/Header";

import logo from "../assets/logo/logo.png";
import fbIcon from "../assets/icons/fb-icon.svg";
import igIcon from "../assets/icons/ig-icon.svg";
import linIcon from "../assets/icons/lin-icon.svg";
import twIcon from "../assets/icons/tw-icon.svg";
import ytIcon from "../assets/icons/yt-icon.svg";

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
            <img src={logo} alt="Logo" />
          </Logo>
        </LogoWrapper>

        <IconContainer>
          <FooterIcon src={fbIcon} alt="Facebook" />
          <FooterIcon src={igIcon} alt="Instagram" />
          <FooterIcon src={linIcon} alt="LinkedIn" />
          <FooterIcon src={twIcon} alt="Tweeter" />
          <FooterIcon src={ytIcon} alt="Youtube" />
        </IconContainer>
      </NavContainer>
    </FooterContainer>
  );
};

export default Footer;
