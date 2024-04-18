import { Wrapper, ImgInner, ClientName, Description, Img } from "./wrapper";

interface ClientProps {
  name: string;
  description: string;
  imgSrc: string;
  alt: string;
  imgPosition: string;
}

export default function ClientImg({ client }: { client: ClientProps }) {
  return (
    <Wrapper>
      <Img
        src={`/clients/${client.imgSrc}`}
        width={310}
        height={186}
        sizes="100vw"
        quality={100}
        alt={client.alt}
        style={{ objectPosition: client.imgPosition }}
      ></Img>
      <ImgInner>
        <ClientName>{client.name}</ClientName>
        <Description>{client.description}</Description>
      </ImgInner>
    </Wrapper>
  );
}
