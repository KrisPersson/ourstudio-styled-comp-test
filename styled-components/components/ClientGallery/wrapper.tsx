import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import { Grid } from "../CssGrid/index";

export const Wrapper = styled.div``;

export const Inner = styled(Grid)`
  padding-left: 0;
  margin: 0;
  margin-top: ${size(4)};
  display: grid;
  row-gap: ${size(5)};
  column-gap: 0;

  ${(props) => props.theme.breakpoint.Sm} {
    column-gap: ${size(5)};
  }
  ${(props) => props.theme.breakpoint.Lg} {
    margin-top: ${size(11)};
  }
`;
