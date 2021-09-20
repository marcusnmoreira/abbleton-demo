import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  padding-bottom: 8.3333vw;
  height: auto;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MainArticle = styled.article`
  background: url("https://ableton-production.imgix.net/uploads/homepage-teasers/ABL291_QuinzeQuinze2.jpg?fit=crop&amp;auto=format&amp;fm=jpg")
    no-repeat;
  background-position: center;
  background-size: cover;
  width: 59vw;
  height: 40vw;
`;

export const SecondArticle = styled.article`
  background: url("https://ableton-production.imgix.net/uploads/homepage-teasers/Artboard_1_copy_14-100.jpg?fit=crop&amp;auto=format&amp;fm=jpg");
  background-position: center;
  background-size: cover;
  width: 32vw;
  height: 22vw;
`;

export const ThirdArticle = styled.article`
  background: url("https://ableton-production.imgix.net/uploads/homepage-teasers/ABL288_Pitchloop89-HP-2.jpg?fit=crop&amp;auto=format&amp;fm=jpg");
  background-position: center;
  background-size: cover;
  width: 35vw;
  height: 22vw;
  position: relative;
  left: 45vw;
  margin-top: -4.25vw;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4.15vw;
`;

export const TextWrapperSecond = styled(TextWrapper)`
  padding: 2.15vw;
`;

export const HeaderMainArticle = styled.h1`
  font-family: "Avenir", sans-serif;
  font-weight: 500;
  font-size: 3.25rem;
  color: ${({ theme }) => theme.color.accentColor};
  line-height: 135%;
  letter-spacing: 0.02em;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  padding-bottom: 2vw;
`;

export const HeaderSecondArticle = styled.h3`
  font-family: "Avenir", sans-serif;
  font-weight: 500;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.color.supportColorYellow};
  line-height: 145%;
  letter-spacing: 0.02em;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  padding-bottom: 2vw;
`;

export const HeaderThirdArticle = styled(HeaderSecondArticle)`
  color: ${({ theme }) => theme.color.supportColorCyan};
`;

export const HeaderMainCta = styled.a`
  color: ${({ theme }) => theme.color.accentColor};
`;
