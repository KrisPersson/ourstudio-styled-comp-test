import { styled } from "styled-components";
import { Grid } from "../CssGrid/index";
import { size } from "../../layout/helpers";

export const Wrapper = styled.div`
  overflow-x: scroll;
`;

export const Inner = styled(Grid)`
  grid-template-rows: 2fr;
  padding-left: 0;
  margin: 0;
  min-width: 1000px;
  grid-gap: ${size(4)};
  margin-top: ${size(4)};

  ${(props) => props.theme.breakpoint.Lg} {
    grid-gap: ${size(5)};
    margin-top: ${size(11)};
  }
`;
