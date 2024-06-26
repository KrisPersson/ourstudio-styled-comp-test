import { styled } from "styled-components";
import { Grid } from "../CssGrid/index";
import { MarkerLineBefore } from "../MarkerLine/index";
import { H3 } from "../Heading/index";
import { size } from "../../layout/helpers";

export const Wrapper = styled(Grid)`
  row-gap: ${size(4)};
  padding-left: 0;
  list-style: none;
  ${(props) => props.theme.breakpoint.Md} {
    row-gap: 0;
  }
`;

export const Item = styled(Grid)`
  grid-template-rows: ${size(5)} auto;
  grid-row: auto;
  grid-column: auto / span 12;
  row-gap: ${size(2)};

  ${(props) => props.theme.breakpoint.Md} {
    grid-column-end: span 6;
  }
`;

export const MarkerLine = styled.div`
  ${MarkerLineBefore};
  display: block;
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  margin: auto 0;
`;

export const ToolTitle = styled(H3)`
  grid-row: 1 / span 1;
  grid-column: 3 / -2;
  font-weight: 400;
  max-width: fit-content;
  line-height: ${size(4)};
  ${(props) => props.theme.breakpoint.Sm} {
    grid-column-start: 2;
    line-height: ${size(5)};
  }
`;

export const TextContent = styled.p`
  margin: 0;
  line-height: ${size(3.5)};
  color: ${(props) => props.theme.colors.primaryLight};
  grid-row: 2 / -1;
  grid-column: 3 / -1;
  ${(props) => props.theme.breakpoint.Sm} {
    grid-column-start: 2;
  }
`;
