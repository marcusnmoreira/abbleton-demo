import React from "react";
import { NavLink } from "../commons";
import { FooterContainer, FooterHeader, LinkContainer } from "./FooterElements";

const list1 = ["Register Live o Push", "About Ableton", "Jobs"];
const list2 = [
  "Offers for students and teachers",
  "Ableton for the Classroom",
  "Ableton fo colleges and Universities",
];

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterHeader>Ableton</FooterHeader>
        <LinkContainer>
          {list1.map((item, index) => (
            <NavLink variant="defaultLink" key={index}>
              {item}
            </NavLink>
          ))}
        </LinkContainer>
        <LinkContainer>
          <h3>Education</h3>
          {list2.map((item, index) => (
            <NavLink variant="defaultLink" key={index}>
              {item}
            </NavLink>
          ))}
        </LinkContainer>
        <LinkContainer>
          <h3>Sign up to our Newsletter</h3>
          <NavLink variant="defaultLink">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </NavLink>
        </LinkContainer>
        <div>Teste 4</div>
        <div>Teste 5</div>
        <div>Teste 6</div>
      </FooterContainer>
    </>
  );
};

export default Footer;
