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
  grid-column: auto / span 12;
  min-height: ${size(42.5)};

  ${(props) => props.theme.breakpoint.Sm} {
    min-height: ${size(47.5)};
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: auto / span 6;
  }
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: ${size(60.75)};
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
