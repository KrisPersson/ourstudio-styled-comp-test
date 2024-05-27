import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { PageSection } from "../styled-components/components/Page/index";
import LongStoryShort from "./startpage/LongStoryShort";
import WhatWeDo from "./startpage/WhatWeDo";
import WhoWeAre from "./startpage/WhoWeAre";
import WhatWeveDone from "./startpage/WhatWeveDone";
import OurToolbox from "./startpage/OurToolbox";
import WorkingWithStudents from "./startpage/WorkingWithStudents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Studio</title>
        <meta
          name="description"
          content="We solve problems by challenging the traditonal ways of working."
        />
      </Head>

      <PageSection id="section-long-story-short" aria-label="Long Story Short">
        <LongStoryShort />
      </PageSection>
      <PageSection id="section-what-we-do" aria-label="What we do">
        <WhatWeDo />
      </PageSection>
      <PageSection id="section-who-we-are" aria-label="Who we are">
        <WhoWeAre />
      </PageSection>
      <PageSection id="section-what-weve-done" aria-label="What we've done">
        <WhatWeveDone />
      </PageSection>
      <PageSection id="section-our-toolbox" aria-label="Our Toolbox">
        <OurToolbox />
      </PageSection>
      <PageSection
        id="section-working-with-students"
        aria-label="Working with students"
      >
        <WorkingWithStudents />
      </PageSection>
    </>
  );
}
