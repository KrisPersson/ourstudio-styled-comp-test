import React from "react";

import { Wrapper } from "./wrapper";
import { Tagline } from "../Tagline/index";
import { Subheading } from "../Subheading/index";

interface SectionHeaderProps {
  tagline?: string;
  children: React.ReactNode;
  subheading?: string;
}

const SectionHeader = ({
  tagline,
  children,
  subheading,
}: SectionHeaderProps) => (
  <Wrapper as="header">
    {tagline && <Tagline>{tagline}</Tagline>}
    {children}
    {subheading && <Subheading>{subheading}</Subheading>}
  </Wrapper>
);

export default SectionHeader;
