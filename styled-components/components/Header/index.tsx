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

  function handleClickLink() {
    setShowHamburgerMenu(false);
  }

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
            title="Open menu"
          >
            <Image
              src="/icons/hamburger-menu-white.svg"
              width={32}
              height={18}
              alt="Hamburger-menu icon"
              aria-hidden
            />
          </HamburgerButton>
          {!showHamburgerMenu && (
            <MenuToggleButton
              onClick={() => setShowHamburgerMenu((prev) => !prev)}
              title="Open menu"
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
            handleClickLink={handleClickLink}
          />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
