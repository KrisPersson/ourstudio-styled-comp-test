import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import { Grid } from "../CssGrid/index";
import Link from "next/link";
import Image from "next/image";

export const Wrapper = styled(Grid)`
  grid-template-rows: repeat(3, auto);
  row-gap: ${size(3)};
  margin-top: ${size(3)};
  margin-bottom: ${size(0)};
  ${(props) => props.theme.breakpoint.Md} {
    row-gap: ${size(11)};
    margin-bottom: ${size(17.5)};
  }
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
    grid-row: 1 / span 1;
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
  gap: ${size(5)};
  margin-top: ${size(3)};
  ${(props) => props.theme.breakpoint.LtSm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: ${size(2)};
  grid-row: auto / span 1;
  grid-column: 3 / span 4;
  & + & {
    grid-column: 7 / span 4;
  }

  ${(props) => props.theme.breakpoint.Sm} {
    grid-column: 1 / span 6;
    & + & {
      grid-column: 7 / span 6;
    }
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: 2 / span 5;
    & + & {
      grid-column: 7 / span 5;
    }
  }
  ${(props) => props.theme.breakpoint.Lg} {
    grid-column: 3 / span 4;
    & + & {
      grid-column: 7 / span 4;
    }
  }
`;

export const ImgWrapper = styled("div")`
  overflow: hidden;
  position: relative;
  min-height: ${size(31.25)};
  width: auto;
  @media (max-width: 380px) {
    min-height: ${size(21)};
  }

  @media (min-width: 490px) and (max-width: 599px) {
    min-height: ${size(37.5)};
  }

  ${(props) => props.theme.breakpoint.Sm} {
    min-height: ${size(30.25)};
  }
  ${(props) => props.theme.breakpoint.Md} {
    min-height: ${size(34.5)};
  }
  ${(props) => props.theme.breakpoint.Lg} {
    min-height: ${size(37.5)};
  }
`;

export const StudentsImg = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: auto;
  height: 100%;
`;

export const BottomWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: ${size(2)};
  grid-row: 3 / span 1;
  grid-column: 2 / -2;
  ${(props) => props.theme.breakpoint.Sm} {
    grid-column: 3 / -3;
  }
  ${(props) => props.theme.breakpoint.Md} {
    grid-column: 4 / -4;
  }
`;
