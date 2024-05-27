import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H2 } from "../../styled-components/components/Heading/index";
import ClientGallery from "../../styled-components/components/ClientGallery/index";
import { StackLarge } from "../../styled-components/components/Stack/index";

export default function WhatWeveDone() {
  return (
    <Container>
      <StackLarge>
        <SectionHeader tagline="What we've done">
          <H2>We are always challenging ourselves and the client.</H2>
        </SectionHeader>
      </StackLarge>
      <StackLarge>
        <ClientGallery />
      </StackLarge>
    </Container>
  );
}
