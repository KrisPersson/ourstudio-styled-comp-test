import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Link from "next/link";

import { theme } from "../../layout/theme";

const navClassPrimary = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-row: 2 / span 1;
    z-index: 2;
    `;
const navClassSecondary = `
    display: none;
    justify-content: unset;
    ${theme.breakpoint.Md} {
      display: flex;
      justify-content: space-between;
    };
`;

export const StyledNav = styled.nav<{ $primary?: boolean }>`
  ${(props) => (props.$primary ? navClassPrimary : navClassSecondary)}
`;

export const Ul = styled.ul<{ $primary?: boolean }>`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${size(5)};

  ${(props) => props.$primary && ulClassPrimary}
`;
const ulClassPrimary = `
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    align-items: flex-start;
    gap: ${size(2)};
`;

export const ALink = styled(Link)<{ $primary?: boolean }>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.family.main};

  ${(props) => props.$primary && aLinkClassPrimary}
`;

const aLinkClassPrimary = `
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      background: ${theme.colors.secondaryDefault};
      display: none;
      width: ${size(4)};
      height: 1px;
      color: ${theme.colors.secondaryDefault};
    };
    &:hover {
      &::before {
        display: block;
      }
      color: ${theme.colors.secondaryDefault};
    };
    ${theme.breakpoint.Md} {
      font-size: 2.25rem;
      gap: ${size(3)};
    };
  `;
