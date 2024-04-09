import { styled } from "styled-components";

export const Tagline = styled.p`
  color: ${(props) => props.theme.colors.secondaryDefault}
  font-size: "0.75rem",
  @media (min-width: 768px) {
    font-size: "1.25rem",
  }
`;
