import { css, styled } from "styled-components";
import { Grid } from "../CssGrid/index";
import { Tagline } from "../Tagline/index";
import { size } from "../../layout/helpers";

export const Wrapper = styled(Grid)`
  grid-template-rows: 62px auto;
  width: 100%;
  flex: 1 1 100%;
  ${Tagline} {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-template-rows: 118px auto;
  }
`;

export const UL = styled.ul`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${size(2)};

  ${(props) => props.theme.breakpoint.Md} {
    gap: ${size(3)};
  }
`;

export const ListItemP = styled.p`
  font-weight: 700;
  font-size: ${size(3)};
  line-height: ${size(4)};
  margin: 0;
  ${(props) => !props.$strikethru && strikeThru}

  ${(props) => props.theme.breakpoint.Md} {
    font-size: ${size(4.5)};
    line-height: ${size(5)};
  }
`;

const strikeThru = css`
  text-decoration: line-through;
`;
