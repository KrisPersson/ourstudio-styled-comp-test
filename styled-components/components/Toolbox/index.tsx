import { Wrapper, Item, MarkerLine, ToolTitle, TextContent } from "./wrapper";

export default function Toolbox() {
  return (
    <Wrapper as="ul">
      <Item as="li">
        <MarkerLine />
        <ToolTitle>Development</ToolTitle>
        <TextContent>
          Vi utvärderar och väljer de verktyg vi tycker är bäst för uppgiften,
          (oftast; python, go, C#, kubernetes, javascript, react) …
        </TextContent>
      </Item>
      <Item as="li">
        <MarkerLine />
        <ToolTitle>UI/UX</ToolTitle>
        <TextContent>
          Effektiva visuella gränssnitt som sätter användarna först, oavsett om
          det är ett internt verktyg eller en extern hemsida. Iterativ
          optimering och testning för att kontinuerligt utveckla produkter och
          förbättra användarvänlighet och kundnytta. Hitta balansen mellan
          effektiva, moderna och attraktiva gränsnitt.
        </TextContent>
      </Item>
      <Item as="li">
        <MarkerLine />
        <ToolTitle>Machine learning</ToolTitle>
        <TextContent>
          Machine learning mauris iaculis porttitor posuere. Praesent id metus
          massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et
          justo dignissim congue. Donec congue lacinia dui, a porttitor lectus
          condimentum laoreet. Nunc eu ullamcorper orci.
        </TextContent>
      </Item>
    </Wrapper>
  );
}
