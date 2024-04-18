import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { H2 } from "../../styled-components/components/Heading/index";
import Students from "../../styled-components/components/Students/index";
import {
  StackLarge,
  Stack,
} from "../../styled-components/components/Stack/index";
import { DesktopOnlyTextContent } from "../../styled-components/components/Students/wrapper";
import { Grid } from "../../styled-components/components/CssGrid/index";

export default function WorkingWithStudents() {
  return (
    <Container>
      <StackLarge>
        <Stack>
          <SectionHeader tagline="Working with students">
            <H2>Gör ditt examensarbete hos oss.</H2>
          </SectionHeader>
        </Stack>
        <Stack>
          <Grid>
            <DesktopOnlyTextContent>
              Vi arbetar tillsammans med studenter och deras examensarbete för
              att utveckla samtida och framtida tekniker och forskning. Ni kan
              läsa mer om våra föreslagna exjobb nedan.
            </DesktopOnlyTextContent>
          </Grid>
        </Stack>
      </StackLarge>
      <StackLarge>
        <Students />
      </StackLarge>
    </Container>
  );
}
