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
  grid-row: auto;
  grid-column: auto / span 3;
`;

export const Img = styled(StyledImg)`
  object-position: center;

  ${(props) => props.theme.breakpoint.LtLg} {
    max-height: 291px;
  }
`;

export const ImgInner = styled(CardContentWrapper)``;

export const JobDepartment = styled(ContentTop)``;

export const EmployeeName = styled(ContentBottom)``;
