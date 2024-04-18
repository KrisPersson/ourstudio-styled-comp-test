import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H2 } from "../../styled-components/components/Heading/index";
import Gallery from "../../styled-components/components/Gallery/index";
import { StackLarge } from "../../styled-components/components/Stack/index";

export default function WhoWeAre() {
  return (
    <Container>
      <StackLarge>
        <SectionHeader tagline="Who we are">
          <H2>We are 20 experts who love what we do.</H2>
        </SectionHeader>
      </StackLarge>
      <StackLarge>
        <Gallery />
      </StackLarge>
    </Container>
  );
}
