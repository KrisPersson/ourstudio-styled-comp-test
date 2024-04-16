import styled, { css } from "styled-components";

import { size } from "../../layout/helpers";

interface HeadingBaseProps {
  $noMargin?: boolean;
}

export const HeadingBase = styled.div<HeadingBaseProps>`
  display: block;
  margin: 0;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-family: ${(props) => props.theme.font.family.main};
  line-height: 1.1;
`;

export const H1 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h1",
}))`
  font-size: 2rem;
  line-height: 3rem;
  ${(props) => props.theme.breakpoint.Md} {
    font-size: 5.125rem;
    line-height: 5.5rem;
  }
`;

export const H2 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h2",
}))`
  font-size: 2rem;

  ${(props) => props.theme.breakpoint.Md} {
    font-size: 5.125rem;
  }
`;

export const H3 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h3",
}))`
  font-size: 1.5rem;

  ${(props) => props.theme.breakpoint.Md} {
    font-size: 1.75rem;
  }
`;

export const H4 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h4",
}))`
  font-size: 1.125rem;
`;

export const H5 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h5",
}))`
  font-size: 1rem;
`;

export const H6 = styled(HeadingBase).attrs<{ as: string }>((props) => ({
  as: props.as || "h6",
}))`
  font-size: 0.875rem;
`;
