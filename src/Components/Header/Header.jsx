import React from "react";
import styled from "styled-components";
import Store from "../../Store";
import { observer } from "mobx-react";

import LoginModal from "../Header/LoginModal";
import HeaderDropdown from "../Header/HeaderDropdown";
import OutsideAlerter from "./OutsideAlerter";

import logo from "../../assets/logo/logo.png";
import search from "../../assets/icons/search.png";
import defAvatar from "../../assets/avatar/defAvatar.png";

const Nav = styled.nav`
  background-color: #01579b;
  position: sticky;
  position: relative;
  z-index: 100;
`;
export const Logo = styled.div`
  margin-right: 15px;
  min-width: 44px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const MyProfile = styled.div`
  color: #fff;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const SearchWrapper = styled.div`
  position: relative;
`;
const Search = styled.input`
  padding: 15px;
  padding-left: 30px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  background-color: #015e9b;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  min-width: 280px;
  color: rgba(255, 255, 255, 1);
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
export const NavContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
  font-size: 1.4em;
  display: flex;
  justify-content: space-between;
`;
const SearchIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

const Header = observer(() => {
  return (
    <Nav>
      {console.log(Store.user)}
      <NavContainer>
        <LogoWrapper>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <SearchWrapper>
            <Search type="text" placeholder="Търси" />
            <SearchIcon src={search} />
          </SearchWrapper>
        </LogoWrapper>

        <Menu>
          {Store.user !== undefined ? (
            <OutsideAlerter>
              <MyProfile onClick={() => Store.openDropdown()}>
                <HeaderDropdown name={Store.user.name} />
                <Avatar
                  src={checkForAvatar(Store.user.avatar)}
                  alt="Default user avatar"
                />
              </MyProfile>
            </OutsideAlerter>
          ) : (
            <MyProfile onClick={(e) => Store.openForm()}>
              Моят профил
              <Avatar src={defAvatar} alt="Default user avatar" />
            </MyProfile>
          )}
        </Menu>
      </NavContainer>
      <LoginModal />
    </Nav>
  );
});

export default Header;

const checkForAvatar = (image) => {
  if (image === undefined || image === null) {
    return defAvatar;
  } else {
    return `http://localhost:8000${image}`;
  }
};
