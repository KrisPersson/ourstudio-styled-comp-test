import { styled } from "styled-components";
import { size } from "../../layout/helpers";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.padding.page.top.mobile};

  ${(props) => props.theme.breakpoint.Md} {
    padding-top: ${(props) => props.theme.padding.page.top.desktop};
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${size(3)};
`;

export const LogoContainer = styled.div`
  position: relative;
  min-width: ${size(17.5)};
  min-height: ${size(3)};
  ${(props) => props.theme.breakpoint.Md} {
    min-width: ${size(20)};
    min-height: ${size(3.5)};
  }
`;

export const HamburgerButton = styled.button`
  maxwidth: fit-content;
  alignself: center;
  fontfamily: var(--font-dmsans);
  fontsize: 17px;
  alignitems: center;
  gap: ${size(1)};

  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primaryLight};
  cursor: pointer;
  padding: 0;

  display: flex;
  ${(props) => props.theme.breakpoint.Md} {
    display: none;
  }
`;
