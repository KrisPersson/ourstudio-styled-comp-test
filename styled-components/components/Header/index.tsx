import { Wrapper, Inner } from "./wrapper";
import { Container } from "../Container/index";

const Header = () => {
  return (
    <Wrapper aria-label="Page header">
      <Container>
        <Inner>
          <p>Tjena tjena Header</p>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
