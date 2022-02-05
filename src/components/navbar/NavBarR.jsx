import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "../carwidget/CartWidget";

const NavBarR = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">VinKe-Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
          <Nav.Link href="#pricing">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarR;
