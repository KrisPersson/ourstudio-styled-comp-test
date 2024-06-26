import Image from "next/image";
import Nav from "../Nav/index";

import { MenuToggleButton } from "../MenuToggleButton/index";
import { Container } from "../Container/index";
import {
  Wrapper,
  Inner,
  CloseBtn,
  MailToLink,
  AddressBox,
  Address,
  BlackLogo,
} from "./wrapper";
type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (action: A) => void;

export default function MenuModal({
  showHamburgerMenu,
  setShowHamburgerMenu,
  handleClickLink,
}: {
  showHamburgerMenu: boolean;
  setShowHamburgerMenu: Dispatch<SetStateAction<boolean>>;
  handleClickLink: () => void;
}) {
  const displayValue = showHamburgerMenu ? "block" : "none";

  return (
    <Wrapper style={{ display: displayValue }} aria-label="Menu">
      <Container>
        <Inner>
          {showHamburgerMenu && (
            <>
              <MenuToggleButton
                onClick={() => setShowHamburgerMenu((prev) => !prev)}
                title="Close menu"
              >
                <Image
                  src="/logo/logo-o.svg"
                  width={34}
                  height={26}
                  alt="OurStudio logo"
                />
                <Image
                  src="/icons/hamburger-menu-black.svg"
                  width={34}
                  height={26}
                  alt="OurStudio logo"
                />
              </MenuToggleButton>
            </>
          )}
          <CloseBtn
            title="Close menu"
            onClick={() => setShowHamburgerMenu((prev) => !prev)}
          >
            Stäng
            <Image
              src="/icons/x-close-white.svg"
              width={28}
              height={28}
              aria-hidden={true}
              alt="Close"
            />
          </CloseBtn>
          <Nav
            navType="Primary"
            handleClickLink={handleClickLink}
            aria-label="Main navigation"
          />
          <AddressBox>
            <MailToLink
              href="mailto:hello@ourstudio.se?subject=Hello Our Studio!"
              title="Send us an e-mail"
            >
              hello@ourstudio.se
            </MailToLink>
            <Address>
              Our Studio <br />
              Kungsgatan 57 <br />
              411 15 Göteborg
            </Address>
          </AddressBox>
          <BlackLogo
            src="/logo/logo-black.svg"
            width={69}
            height={384}
            alt="OurStudio Logo"
            aria-hidden={true}
          ></BlackLogo>
        </Inner>
      </Container>
    </Wrapper>
  );
}
