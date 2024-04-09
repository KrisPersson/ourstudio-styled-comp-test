import styled, { css } from "styled-components";
import { size } from "../../layout/helpers";

export const Wrapper = styled.footer`
  padding-top: ${size(6)};
  z-index: 10;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${size(3)};
`;

// ${(props) => props.theme.breakpoint.Md} {
//     //position: sticky;
//     //top: ${size(-6)};
//     padding-top: ${size(12)};
//   }

//   ${(props) => props.theme.breakpoint.LtSm} {
//     position: sticky;
//     top: ${size(-3)};
//   }
