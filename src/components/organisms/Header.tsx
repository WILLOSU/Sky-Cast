import Link from "next/link";
import { Container, Logo, Nav } from "./Header.styles"; 

const Header = () => {
  return (
    <Container>
      <Logo>SkyCast</Logo>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/contact">Contato</Link>
      </Nav>
    </Container>
  );
};

export default Header;
