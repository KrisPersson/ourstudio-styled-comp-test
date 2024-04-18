import styled from "styled-components";

import { size } from "../../layout/helpers";

export const Stack = styled.div`
  & + & {
    margin-top: ${size(2.5)};
  }
  ${(props) => props.theme.breakpoint.Md} {
    & + & {
      margin-top: ${size(3)};
    }
  }
`;

export const StackTiny = styled.div`
  & + & {
    margin-top: ${size(0.5)};
  }
`;

export const StackSmall = styled.div`
  & + & {
    margin-top: ${size(2)};
  }
`;

export const StackMedium = styled.div`
  & + & {
    margin-top: ${size(5)};
  }
`;

export const StackLarge = styled.div`
  & + & {
    margin-top: ${size(5)};
  }

  ${(props) => props.theme.breakpoint.Md} {
    & + & {
      margin-top: ${size(11)};
    }
  }
`;
