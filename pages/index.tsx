import Image from "next/image";
import { Inter } from "next/font/google";
import { PageSection } from "../styled-components/components/Page/index";
import LongStoryShort from "./startpage/LongStoryShort";
import WhatWeDo from "./startpage/WhatWeDo";
import WhoWeAre from "./startpage/WhoWeAre";
import WhatWeveDone from "./startpage/WhatWeveDone";
import OurToolbox from "./startpage/OurToolbox";
import WorkingWithStudents from "./startpage/WorkingWithStudents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageSection aria-label="Hero">
        <LongStoryShort />
      </PageSection>
      <PageSection aria-label="What we do">
        <WhatWeDo />
      </PageSection>
      <PageSection aria-label="Who we are">
        <WhoWeAre />
      </PageSection>
      <PageSection aria-label="What we've done">
        <WhatWeveDone />
      </PageSection>
      <PageSection aria-label="Our Toolbox">
        <OurToolbox />
      </PageSection>
      <PageSection aria-label="Working with students">
        <WorkingWithStudents />
      </PageSection>
    </>
  );
}
