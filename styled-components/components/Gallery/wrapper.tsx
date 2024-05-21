import { styled } from "styled-components";
import { Grid } from "../CssGrid/index";
import { size } from "../../layout/helpers";

export const Wrapper = styled.div`
  overflow-x: auto;
  margin-inline: var(--ignore-gutter);
  padding-inline: var(--gutter);
`;

export const Inner = styled(Grid)`
  padding-left: 0;
  margin: 0;
  min-width: 1000px;
  grid-gap: ${size(4)};
  list-style: none;

  ${(props) => props.theme.breakpoint.Lg} {
    grid-gap: ${size(5)};
  }
`;
