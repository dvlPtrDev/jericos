import { Button, Container } from "react-bootstrap";
import styled from "styled-components";

const MenuWrapper = styled(Container)`
  text-align: center;
  margin: 100px auto;
  padding: 50px 20px;
`;

export default function Cardapio() {
  return (
    <MenuWrapper>
      <h2>Nosso <span style={{color: "var(--red)"}}>Cardápio</span></h2>
      <p>Confira todas as delícias que preparamos para você!</p>
      <Button
        variant="primary"
        className="btn"
        href="/cardapio.pdf" // coloque o PDF na pasta public do React
        target="_blank"
      >
        Abrir Cardápio
      </Button>
    </MenuWrapper>
  );
}