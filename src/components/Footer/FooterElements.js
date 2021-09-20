import styled from "styled-components";
import { NavLink } from "../commons";

export const FooterContainer = styled.section`
  padding: ${({ theme }) => theme.padding.defaultBody};
  display: grid;
  grid-template-columns: 1fr 1fr 1.1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 4rem;
`;
export const FooterHeader = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  grid-column: 1/4;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 0.5rem;
    letter-spacing: 0.04em;

    &::selection {
      background: blue;
      color: #fff;
    }
  }

  ${NavLink} {
    padding-left: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;
