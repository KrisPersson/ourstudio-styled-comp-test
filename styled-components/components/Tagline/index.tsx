import { styled } from "styled-components";

export const Tagline = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.secondaryDefault};
  font-size: 0.75rem;
  letter-spacing: 4.8px;
  margin-bottom: ;
  ${(props) => props.theme.breakpoint.Md} {
    font-size: 1.25rem;
  }
`;
