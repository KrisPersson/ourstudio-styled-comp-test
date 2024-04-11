import { Wrapper, Inner } from "./wrapper";
import ClientImg from "../ClientImg/index";
import { clients } from "./clients";

export default function ClientGallery() {
  const imageItems = clients.map((client, i) => {
    return <ClientImg key={i} client={client} />;
  });

  return (
    <Wrapper>
      <Inner as="ul">
        {imageItems.length > 0 ? imageItems : <p>No images found :(</p>}
      </Inner>
    </Wrapper>
  );
}
