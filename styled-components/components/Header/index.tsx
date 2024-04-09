import { Wrapper, Inner, LogoContainer, HamburgerButton } from "./wrapper";
import { Container } from "../Container/index";
import Image from "next/image";
import { useState } from "react";
import { size } from "../../layout/helpers";
import { MenuToggleButton } from "../MenuToggleButton/index";
import Nav from "../Nav/index";
import MenuModal from "../MenuModal/index";

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <Wrapper aria-label="Page header">
      <Container>
        <Inner>
          <LogoContainer>
            <Image src="/logo/logo-white.svg" fill alt="OurStudio logo" />
          </LogoContainer>
          <Nav navType="Secondary" />
          <HamburgerButton
            onClick={() => setShowHamburgerMenu((prev) => !prev)}
          >
            <Image
              src="/icons/hamburger-menu-white.svg"
              width={32}
              height={18}
              alt="Show menu"
              aria-hidden
            />
          </HamburgerButton>
          {!showHamburgerMenu && (
            <MenuToggleButton
              onClick={() => setShowHamburgerMenu((prev) => !prev)}
              title="Hide/Show menu"
            >
              <Image
                src="/logo/logo-o.svg"
                width={34}
                height={26}
                alt="OurStudio icon"
              />
              <Image
                src="/icons/hamburger-menu-black.svg"
                width={34}
                height={26}
                alt="Hamburger icon"
              />
            </MenuToggleButton>
          )}

          <MenuModal
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
