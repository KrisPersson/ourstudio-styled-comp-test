import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.size.containerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${(props) => props.theme.gutter.container.inline.mobile};
  padding-left: max(
    env(safe-area-inset-left),
    ${(props) => props.theme.gutter.container.inline.mobile}
  );
  padding-right: max(
    env(safe-area-inset-right),
    ${(props) => props.theme.gutter.container.inline.mobile}
  );

  ${(props) => props.theme.breakpoint.Md} {
    padding: 0 ${(props) => props.theme.gutter.container.inline.mobile};
    padding-left: max(
      env(safe-area-inset-left),
      ${(props) => props.theme.gutter.container.inline.desktop}
    );
    padding-right: max(
      env(safe-area-inset-right),
      ${(props) => props.theme.gutter.container.inline.desktop}
    );
  }
`;
