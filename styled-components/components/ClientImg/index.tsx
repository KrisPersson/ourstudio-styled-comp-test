import { Wrapper, ImgInner, ClientName, Description, Img } from "./wrapper";

interface ClientProps {
  name: string;
  description: string;
  imgSrc: string;
  alt: string;
}

export default function ClientImg({ client }: { client: ClientProps }) {
  return (
    <Wrapper>
      <Img
        src={`/clients/${client.imgSrc}`}
        width={680}
        height={486}
        alt={client.alt}
      ></Img>
      <ImgInner>
        <ClientName>{client.name}</ClientName>
        <Description>{client.description}</Description>
      </ImgInner>
    </Wrapper>
  );
}
