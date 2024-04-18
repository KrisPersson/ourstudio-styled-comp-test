import { Wrapper, Inner } from "./wrapper";
import { employees } from "./employees";
import GalleryImg from "../GalleryImg/index";

export default function Gallery() {
  const imageItems = employees.map((employee, i) => {
    return <GalleryImg key={i} employee={employee} />;
  });

  return (
    <Wrapper>
      <Inner as="ul">
        {imageItems.length > 0 ? imageItems : <p>No images found :(</p>}
      </Inner>
    </Wrapper>
  );
}
