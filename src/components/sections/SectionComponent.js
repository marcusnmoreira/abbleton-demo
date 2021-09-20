import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SectionContent,
  SectionItemWrapper,
  SectionItemImage,
  SectionItemTag,
  SectionItemDescription,
} from "./SectionElements";
import { NavLink } from "../commons";

const Section = ({ data, title, menuLinks }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h1>{title || "Inserir Título"}</h1>
        <div>
          {menuLinks?.map((link, index) => (
            <NavLink variant="primaryLink" key={index}>
              {link}
            </NavLink>
          ))}
        </div>
      </SectionHeader>
      <SectionContent>
        {data?.map((item) => {
          const { id, url, tagName, tagColor, description } = item;
          return (
            <SectionItemWrapper key={id}>
              <SectionItemImage imageUrl={url} />
              <SectionItemTag color={tagColor}>{tagName}</SectionItemTag>
              <SectionItemDescription>{description}</SectionItemDescription>
            </SectionItemWrapper>
          );
        })}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
