import { Wrapper, Inner } from "./wrapper";
import { Container } from "../Container/index";

const Footer = () => {
  return (
    <Wrapper aria-label="Page footer">
      <Container>
        <Inner>
          <p>Tjena Footer</p>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Footer;
