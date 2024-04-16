import { css } from "styled-components";
import { size } from "../../layout/helpers";

export const MarkerLineBefore = css`
  content: "";
  background: ${(props) => props.theme.colors.secondaryDefault};
  display: none;
  width: ${size(2)};
  height: 1px;
  color: ${(props) => props.theme.colors.secondaryDefault};

  ${(props) => props.theme.breakpoint.Md} {
    width: ${size(4)};
  }
`;
