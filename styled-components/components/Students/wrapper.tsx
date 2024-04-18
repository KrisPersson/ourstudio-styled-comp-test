import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import { Grid } from "../CssGrid/index";
import Link from "next/link";
import Image from "next/image";

export const Wrapper = styled(Grid)`
  grid-template-rows: repeat(3, auto);
  row-gap: ${size(3)};
`;

export const TextContent = styled.p`
  margin: 0;
  line-height: ${size(3.5)};
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 17px;
  ${(props) => props.theme.breakpoint.Sm} {
    grid-column: 4 / -4;
    font-size: 19px;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: 4 / -4;
  }
`;

export const DesktopOnlyTextContent = styled(TextContent)`
  display: none;
  ${(props) => props.theme.breakpoint.Md} {
    display: block;
  }
`;
export const StudentsLink = styled(Link)`
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.primaryLight};
`;

export const CardContainer = styled(Grid)`
  grid-template-rows: 1fr;
  grid-column: 1 / -1;
  padding-left: 0;
  gap: ${size(5)};
  ${(props) => props.theme.breakpoint.LtSm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: 2 / -2;
  }
  ${(props) => props.theme.breakpoint.Lg} {
    grid-column: 3 / -3;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: ${size(2)};
  grid-row: auto;
  grid-column: auto / span 6;
`;

export const ImgWrapper = styled("div")`
  overflow: hidden;
  position: relative;
  min-height: ${size(22)};
  background: white;
  width: auto;
  @media (max-width: 380px) {
    min-height: ${size(21)};
  }

  @media (min-width: 490px) and (max-width: 599px) {
    min-height: ${size(25)};
  }

  ${(props) => props.theme.breakpoint.Sm} {
  }
  ${(props) => props.theme.breakpoint.Md} {
    min-height: ${size(31.25)};
  }
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: ${size(31.25)};
  }
`;

export const StudentsImg = styled(Image)`
  object-fit: contain;
  object-position: center;
  @media (max-width: 380px) {
    object-fit: cover;
  }
`;

export const BottomWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: ${size(2)};
  grid-row: 2 / span 1;
  grid-column: 2 / -2;
  ${(props) => props.theme.breakpoint.Sm} {
    grid-column: 3 / -3;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: 4 / -4;
  }
`;
