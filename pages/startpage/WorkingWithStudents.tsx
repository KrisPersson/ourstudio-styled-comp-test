import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H2 } from "../../styled-components/components/Heading/index";
import Students from "../../styled-components/components/Students/index";
export default function WorkingWithStudents() {
  return (
    <Container>
      <SectionHeader tagline="Working with students">
        <H2>Gör ditt examensarbete hos oss.</H2>
      </SectionHeader>
      <Students />
    </Container>
  );
}
