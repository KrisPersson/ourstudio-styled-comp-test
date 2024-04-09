import { NavLinks } from "./NavLinks";
import { Ul, ALink, StyledNav } from "./wrapper";

export default function Nav({ navType }: { navType: "Primary" | "Secondary" }) {
  const navLinks = NavLinks.map((link) => {
    return (
      <li key={link.title}>
        <ALink href={link.url} $primary={navType === "Primary"}>
          {link.title}
        </ALink>
      </li>
    );
  });

  return (
    <StyledNav $primary={navType === "Primary"} aria-label={navType}>
      {navLinks.length > 0 ? (
        <Ul $primary={navType === "Primary"}>{navLinks}</Ul>
      ) : (
        <p>No links found :(</p>
      )}
    </StyledNav>
  );
}
