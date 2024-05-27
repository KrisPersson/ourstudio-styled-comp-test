import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
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

    --gutter: ${(props) => props.theme.gutter.container.inline.mobile};
    ${(props) => props.theme.breakpoint.Md} {
      --gutter: ${(props) => props.theme.gutter.container.inline.desktop}; 
    };
    --ignore-gutter: calc(var(--gutter) * -1);
  }

  

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.primaryDefault};
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.font.family.main};
    line-height: 1.5;
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
