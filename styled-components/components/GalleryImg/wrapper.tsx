import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import {
  CardContentWrapper,
  ContentTop,
  ContentBottom,
  StyledImg,
  ImgWrapper,
} from "../Card/index";

export const Wrapper = styled(ImgWrapper)`
  min-height: ${size(36.25)};
  grid-column: auto / span 3;
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: ${size(51.25)};
  }
`;

export const Img = styled(StyledImg)`
  object-position: center;
  min-height: ${size(22.25)};
  ${(props) => props.theme.breakpoint.LtLg} {
    min-height: ${size(36.25)};
  }
`;

export const ImgInner = styled(CardContentWrapper)``;

export const JobDepartment = styled(ContentTop)``;

export const EmployeeName = styled(ContentBottom)``;
