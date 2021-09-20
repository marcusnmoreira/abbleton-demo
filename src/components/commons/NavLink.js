import styled, { css } from "styled-components";
import theme from "../commons/themes";

const linkVariants = {
  defaultLink: {
    color: "#000000",
    fontSize: "1.125rem",
  },
  primaryLink: {
    color: theme.color.primaryColor,
    fontSize: "1.125rem",
  },
  secondaryLink: {
    color: "#000000",
    fontSize: "1rem",
  },
  accentLink: {
    color: theme.color.accentColor,
    fontSize: "1.125rem",
    padding: "0em",
    textDecorationLine: "underline",
  },
  supportLinkYellow: {
    color: theme.color.supportColorYellow,
    fontSize: "1.125rem",
    padding: "0em",
    textDecorationLine: "underline",
  },
  supportLinkCyan: {
    color: theme.color.supportColorCyan,
    fontSize: "1.125rem",
    padding: "0em",
    textDecorationLine: "underline",
  },
};

export const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  font-family: "Avenir", sans-serif;
  padding: 0 0.85em;
  cursor: pointer;
  color: "#000000";

  ${({ variant }) =>
    variant &&
    linkVariants[variant] &&
    css`
      font-size: ${linkVariants[variant].fontSize};
      color: ${linkVariants[variant].color};
      padding: ${linkVariants[variant].padding};
      text-decoration-line: ${linkVariants[variant].textDecorationLine};
    `}
`;
