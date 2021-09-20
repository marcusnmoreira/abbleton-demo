import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.padding.defaultBody};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;

  > h1 {
    font-size: 2rem;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 400px; */
`;

export const SectionItemWrapper = styled.div`
  display: block;
  width: 24vw;
  overflow: none;
  cursor: pointer;
`;

export const SectionItemImage = styled.div`
  width: 100%;
  height: 15vw;
  margin-bottom: 8px;
  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background: url(${imageUrl}) no-repeat;
      background-size: cover;
      background-position: center;
    `}
`;

export const SectionItemTag = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const SectionItemDescription = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
`;
