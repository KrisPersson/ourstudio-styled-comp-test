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
  ${(props) => props.theme.breakpoint.Sm} {
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: auto / span 6;
  }
`;

export const Img = styled(StyledImg)`
  object-position: center;
  max-height: 340px;
  ${(props) => props.theme.breakpoint.Md} {
    max-height: 438px;
  }
  ${(props) => props.theme.breakpoint.Lg} {
  }
`;

export const ImgInner = styled(CardContentWrapper)``;

export const ClientName = styled(ContentTop)``;

export const Description = styled(ContentBottom)`
  ${(props) => props.theme.breakpoint.Sm} {
    max-width: 75%;
  }
`;
