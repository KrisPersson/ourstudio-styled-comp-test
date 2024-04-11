import { Wrapper, Content, Headline, MailToLink, AddressBox } from "./wrapper";
import { Container } from "../Container/index";

const Footer = () => {
  return (
    <Wrapper aria-label="Page footer">
      <Container>
        <Content>
          <Headline>Vill du hitta på något tillsammans med oss?</Headline>
          <MailToLink
            href="mailto:hello@ourstudio.se?subject=Hello Our Studio!"
            title="Send us an e-mail"
          >
            hello@ourstudio.se
          </MailToLink>
          <AddressBox>
            Our Studio <br />
            Kungsgatan 57 <br />
            411 15 Göteborg
          </AddressBox>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
