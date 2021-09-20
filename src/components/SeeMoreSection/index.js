import React from "react";
import { LinksWrapper, SectionContainer } from "./SeeMoreSectionElements";
import { NavLink } from "../commons";

const links = [
  "All posts",
  "Artists",
  "News",
  "Downloads",
  "Tutorials",
  "Videos",
  "Loop",
  "One Thing",
];

const SeeMoreSection = () => {
  return (
    <>
      <SectionContainer>
        <LinksWrapper>
          <NavLink>More: </NavLink>
          {links.map((item) => (
            <NavLink variant="primaryLink">{item}</NavLink>
          ))}
        </LinksWrapper>
      </SectionContainer>
    </>
  );
};

export default SeeMoreSection;
