import { createGlobalStyle } from "styled-components";

import { Theme } from "./theme";
// import { CSSVariables } from "./css-variables";
// import { Colors } from "./colors";
import { size } from "./helpers";

export default createGlobalStyle<{ theme: Theme }>`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-padding-top: ${size(6)};
  }

  body {
    margin: 0;
    background-color: var(--c-bg-main);
    color: var(--c-text-main);
    font-family: ${(props) => props.theme.font.family.main};
    line-height: ${(props) => props.theme.font.lineHeight.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a img {
    border: 0;
  }

  b,
  strong {
    font-weight: ${(props) => props.theme.font.weight.bold};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
