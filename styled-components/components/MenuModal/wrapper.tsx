import { size } from "../../layout/helpers";
import { styled } from "styled-components";
import { ButtonReset } from "../../layout/reset";
import { MenuToggleButton } from "../MenuToggleButton/index";
import Image from "next/image";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDefault};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  gap: ${size(2)};
  z-index: 5;
`;

export const Inner = styled.div`
  position: relative;
  display: grid;
  height: calc(100vh - (${size(4)} * 2));
  grid-template-rows: ${size(18)} 1fr auto;
  margin-top: ${(props) => props.theme.spacing.padding.page.top.mobile};
  ${(props) => props.theme.breakpoint.Md} {
    margin-top: ${(props) => props.theme.spacing.padding.page.top.desktop};
    height: calc(100vh - (${size(5)} * 2));
    grid-template-rows: ${size(18)} 1fr auto;
    ${MenuToggleButton} {
      top: ${(props) => props.theme.spacing.padding.page.top.desktop};
    }
  }
`;

export const CloseBtn = styled(ButtonReset)`
  max-width: fit-content;
  align-self: center;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: ${size(1)};
  position: absolute;
  top: 0;
  right: 0;
  color: ${(props) => props.theme.colors.primaryLight};
  ${(props) => props.theme.breakpoint.Md} {
    display: none;
  }
`;

export const MailToLink = styled.a`
  padding-block: ${size(2)};
  max-width: fit-content;
  color: ${(props) => props.theme.colors.primaryLight};
  ${(props) => props.theme.breakpoint.Md} {
    text-align: right;
    font-size: 1.75rem;
    line-height: 140%;
  }
`;

export const AddressBox = styled.div`
  position: relative;
  line-height: ${size(3)};
  font-size: 1rem;
  grid-row: 3 / -1;
  display: flex;
  flex-direction: column;
  gap: ${size(1)};
  z-index: 2;
  ${(props) => props.theme.breakpoint.Md} {
    align-items: flex-end;
  }
`;

export const Address = styled.p`
  margin: 0;
  max-width: fit-content;
  ${(props) => props.theme.breakpoint.Md} {
    text-align: right;
    font-size: 1.75rem;
    line-height: 140%;
  }
`;

export const BlackLogo = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  ${(props) => props.theme.breakpoint.Md} {
    bottom: unset;
    top: 0;
    width: ${size(10.5)};
    height: ${size(58.5)};
  }
`;
