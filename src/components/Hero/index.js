import React from "react";
import {
  HeroSection,
  HeroContainer,
  MainArticle,
  HeaderMainArticle,
  HeaderSecondArticle,
  HeaderThirdArticle,
  TextWrapper,
  TextWrapperSecond,
  SecondArticle,
  ThirdArticle,
} from "./HeroElements";
import { NavLink } from "../commons";

const Hero = () => {
  return (
    <div>
      <HeroSection>
        <HeroContainer>
          <MainArticle>
            <TextWrapper>
              <HeaderMainArticle>
                QuinzeQuinze: The art of Mystical Storytelling
              </HeaderMainArticle>
              <NavLink variant="accentLink">Learn more</NavLink>
            </TextWrapper>
          </MainArticle>
          <SecondArticle>
            <TextWrapperSecond>
              <HeaderSecondArticle>
                OctoCell: Combining Musically-Minded FM and Additive Synthesis
              </HeaderSecondArticle>
              <NavLink variant="supportLinkYellow">Learn more</NavLink>
            </TextWrapperSecond>
          </SecondArticle>
        </HeroContainer>
        <ThirdArticle>
          <TextWrapperSecond>
            <HeaderThirdArticle>
              PitchLoop89: What Goes Around Comes Around
            </HeaderThirdArticle>
            <NavLink variant="supportLinkCyan">Watch the demos</NavLink>
          </TextWrapperSecond>
        </ThirdArticle>
      </HeroSection>
    </div>
  );
};

export default Hero;
