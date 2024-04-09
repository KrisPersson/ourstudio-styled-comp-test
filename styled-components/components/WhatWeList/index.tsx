import { Wrapper, UL, ListItemP } from "./wrapper";
import { Tagline } from "../Tagline/index";
import { whatWeDo, whatWeDont } from "./list";

interface IWhatWeListProps {
  tagline: "What we do" | "What we don't";
}

export default function WhatWeList({ tagline }: IWhatWeListProps) {
  const list = tagline === "What we do" ? [...whatWeDo] : [...whatWeDont];

  return (
    <Wrapper>
      <Tagline>{tagline}</Tagline>
      <UL>
        {list.map((item) => {
          return (
            <li key={item}>
              <ListItemP $strikethru={tagline === "What we do"}>
                {item}
              </ListItemP>
            </li>
          );
        })}
      </UL>
    </Wrapper>
  );
}
