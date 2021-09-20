import React from "react";
import {
  NavbarContainer,
  NavWrapper,
  Img,
  Nav,
  ContactWrapper,
} from "./NavbarElements";
import { NavLink } from "../commons/NavLink";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <NavWrapper>
          <Img src={logo} alt="logo" />
          <Nav>
            <NavLink>Live</NavLink>
            <NavLink>Push</NavLink>
            <NavLink>Link</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Packs</NavLink>
            <NavLink>Help</NavLink>
            <NavLink>More</NavLink>
          </Nav>
        </NavWrapper>
        <ContactWrapper>
          <NavLink variant="primaryLink">Try Live for free</NavLink>
          <NavLink variant="secondaryLink">Log in or register</NavLink>
        </ContactWrapper>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
