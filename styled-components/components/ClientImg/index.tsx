import { Wrapper, ImgInner, ClientName, Description, Img } from "./wrapper";

interface ClientProps {
  name: string;
  description: string;
  imgSrc: string;
  alt: string;
  imgPosition: "center" | "left" | "right";
}

export default function ClientImg({ client }: { client: ClientProps }) {
  return (
    <Wrapper>
      <Img
        src={`/clients/${client.imgSrc}`}
        fill={true}
        sizes="(max-width: 899px) 100vw, (min-width: 900px) 50vw"
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
