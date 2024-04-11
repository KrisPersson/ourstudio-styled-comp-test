import { Container } from "../../styled-components/components/Container/index";
import SectionHeader from "../../styled-components/components/SectionHeader/index";
import { Grid } from "../../styled-components/components/CssGrid/index";
import WhatWeList from "../../styled-components/components/WhatWeList/index";
import { styled } from "styled-components";
import { size } from "../../styled-components/layout/helpers";
import { H2 } from "../../styled-components/components/Heading/index";
import ClientGallery from "../../styled-components/components/ClientGallery/index";

export default function WhatWeveDone() {
  return (
    <Container>
      <SectionHeader tagline="What we've done">
        <H2>We are always challenging ourselves and the client.</H2>
      </SectionHeader>
      <ClientGallery />
    </Container>
  );
}
