import styled from "styled-components";

import { size } from "../../layout/helpers";

export const Page = styled.main`
  margin: ${size(17.5)} 0;
  flex-shrink: 0;
`;

export const PageSection = styled.section`
  & + & {
    margin-top: ${size(10)};

    ${(props) => props.theme.breakpoint.Md} {
      margin-top: ${size(20)};
    }
  }
`;
