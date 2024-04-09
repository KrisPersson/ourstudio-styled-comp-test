import { Container } from "../../styled-components/components/Container/index";
import { Tagline } from "../../styled-components/components/Tagline/index";
import { Grid } from "../../styled-components/components/CssGrid/index";
import WhatWeList from "../../styled-components/components/WhatWeList/index";
import { styled } from "styled-components";
import { size } from "../../styled-components/layout/helpers";

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size(16)};

  ${(props) => props.theme.breakpoint.Sm} {
    flex-direction: row;
    gap: 0;
  }
`;

export default function WhatWeDo() {
  return (
    <Container>
      <Inner>
        <WhatWeList tagline="What we do"></WhatWeList>
        <WhatWeList tagline="What we don't"></WhatWeList>
      </Inner>
    </Container>
  );
}
