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
  grid-column: auto / span 12;
  min-height: 340px;

  ${(props) => props.theme.breakpoint.Sm} {
    min-height: 380px;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: auto / span 6;
  }
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: 486px;
  }
`;

export const Img = styled(StyledImg)`
  object-position: center;
  min-height: 100%;
  width: 100%;
`;

export const ImgInner = styled(CardContentWrapper)``;

export const ClientName = styled(ContentTop)``;

export const Description = styled(ContentBottom)`
  ${(props) => props.theme.breakpoint.Sm} {
    max-width: 75%;
  }
`;
