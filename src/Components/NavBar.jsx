import "../App.css";
import useScroll from "./useScroll.jsx";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import styled from "styled-components";


const StyledNavbar = styled(BSNavbar)`
  transition: background-color 0.3s ease;
`;

export default function NavBar() {
  const scrolled = useScroll(50); // retorna true se o usuário rolou > 50px

  return (
    <StyledNavbar
      expand="lg"
      fixed="top"
      className="py-3"
      style={{
        backgroundColor: scrolled ? "var(--navy)" : "rgba(0,0,0,0.3)",
      }}
      variant="dark"
    >
      <Container>
        <StyledNavbar.Brand className="link" href="#">Jericos Burger & Food</StyledNavbar.Brand>
        <StyledNavbar.Toggle />
        <StyledNavbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="link" href="#hours">Horários</Nav.Link>
            <Nav.Link className="link" href="#gallery">Galeria</Nav.Link>
            <Nav.Link className="link" href="#menu">Cardápio</Nav.Link>
          </Nav>
        </StyledNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}