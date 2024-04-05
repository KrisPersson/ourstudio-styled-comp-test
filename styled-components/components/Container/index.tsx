import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.size.containerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--container-gutter);
  padding-left: max(env(safe-area-inset-left), var(--container-gutter));
  padding-right: max(env(safe-area-inset-right), var(--container-gutter));
`;
