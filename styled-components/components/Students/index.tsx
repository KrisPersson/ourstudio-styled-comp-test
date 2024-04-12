import {
  Wrapper,
  TextContent,
  DesktopOnlyTextContent,
  StudentsImg,
  StudentsLink,
  ImgWrapper,
  Card,
  BottomWrapper,
  CardContainer,
} from "./wrapper";

export default function Students() {
  return (
    <Wrapper>
      <DesktopOnlyTextContent>
        Vi arbetar tillsammans med studenter och deras examensarbete för att
        utveckla samtida och framtida tekniker och forskning. Ni kan läsa mer om
        våra föreslagna exjobb nedan.
      </DesktopOnlyTextContent>
      <CardContainer>
        <Card>
          <ImgWrapper>
            <StudentsImg
              src={"/students/reducing.png"}
              fill={true}
              alt="Drawn image of people configuring"
            />
          </ImgWrapper>
          <StudentsLink href="#">
            Reduction of car configuration rules
          </StudentsLink>
        </Card>
        <Card>
          <ImgWrapper>
            <StudentsImg
              src={"/students/volvo.png"}
              fill={true}
              alt="Diagram of Feature extraction of Volvo car configurations"
            />
          </ImgWrapper>
          <StudentsLink href="#">
            Feature extraction of Volvo car configurations
          </StudentsLink>
        </Card>
      </CardContainer>
      <BottomWrapper>
        <TextContent>
          Har du en egen idé eller tanke på examensarbete så är vi gärna
          delaktiga i att se hur det bäst kan genomföras.
        </TextContent>
        <StudentsLink href="#">Berätta om din idé</StudentsLink>
      </BottomWrapper>
    </Wrapper>
  );
}
