import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H2 } from "../../styled-components/components/Heading/index";
import Toolbox from "../../styled-components/components/Toolbox/index";
import {
  StackLarge,
  Stack,
} from "../../styled-components/components/Stack/index";

export default function OurToolbox() {
  return (
    <Container>
      <StackLarge>
        <SectionHeader tagline="Our toolbox">
          <H2>The tools we use to create value.</H2>
        </SectionHeader>
      </StackLarge>
      <StackLarge>
        <Toolbox />
      </StackLarge>
    </Container>
  );
}
