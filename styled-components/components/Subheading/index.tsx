import styled from "styled-components";

import { size } from "../../layout/helpers";

export const Subheading = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.secondaryDefault};
  margin: 0;

  ${(props) => props.theme.breakpoint.Md} {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
