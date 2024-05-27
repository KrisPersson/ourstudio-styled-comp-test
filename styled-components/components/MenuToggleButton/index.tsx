import { size } from "../../layout/helpers";
import { styled } from "styled-components";

export const MenuToggleButton = styled.button`
  position: fixed;
  left: ${(props) => props.theme.gutter.container.inline.desktop};
  top: ${size(14.75)};
  background-color: ${(props) => props.theme.colors.secondaryDefault};
  display: none;
  align-self: center;
  max-width: fit-content;
  border: none;
  padding: ${size(2.5)} ${size(3.25)};
  gap: ${size(2.75)};
  cursor: pointer;
  border-radius: max(100vh, 100vw);
  z-index: 6;
  ${(props) => props.theme.breakpoint.Md} {
    display: flex;
  }
`;
