import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import {
  CardContentWrapper,
  ContentTop,
  ContentBottom,
  StyledImg,
  ImgWrapper,
} from "../Card/wrapper";

export const Wrapper = styled(ImgWrapper)`
  min-height: 290px;
  grid-column: auto / span 3;
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: 410px;
  }
`;

export const Img = styled(StyledImg)`
  object-position: center;
  min-height: 180px;
  ${(props) => props.theme.breakpoint.LtLg} {
    max-height: 291px;
  }
`;

export const ImgInner = styled(CardContentWrapper)``;

export const JobDepartment = styled(ContentTop)``;

export const EmployeeName = styled(ContentBottom)``;
