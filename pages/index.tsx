import Image from "next/image";
import { Inter } from "next/font/google";
import { PageSection } from "../styled-components/components/Page/index";
import LongStoryShort from "./startpage/LongStoryShort";
import WhatWeDo from "./startpage/WhatWeDo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageSection>
        <LongStoryShort />
      </PageSection>
      <PageSection>
        <WhatWeDo />
      </PageSection>
    </>
  );
}
