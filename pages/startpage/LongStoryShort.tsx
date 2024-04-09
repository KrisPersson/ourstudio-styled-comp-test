import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H1 } from "../../styled-components/components/Heading/index";

export default function LongStoryShort() {
  return (
    <Container>
      <SectionHeader
        tagline="LONG STORY SHORT"
        subheading="Using design, code and analytics to create long-term value in a sustainable way."
      >
        <H1>
          We solve problems by challenging the traditional ways of working.
        </H1>
      </SectionHeader>
    </Container>
  );
}
