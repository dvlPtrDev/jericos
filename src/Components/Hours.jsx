import { Container } from "react-bootstrap";
// import banner from "../assets/banner1.jpeg"
let banner = "https://cdn.pixabay.com/photo/2019/08/22/14/24/las-dos-lunas-4423657_1280.jpg"

export default function Hours() {
  return (
      <div style={{ position: "relative", minHeight: "100vh", textAlign: "center", color: "white" }}>
      <img
        src={banner}
        alt="Burger"
        style={{
          width: "100%",
          height: "105vh",
          paddingBottom: "20px",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Overlay semi-transparente */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "102vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 2,
        }}
      ></div>

      {/* Conteúdo */}
      <Container
        style={{
          position: "relative",
          zIndex: 3,
          paddingTop: "100px",
        }}
      >
        <h2>Horário de Funcionamento</h2>
        <p>Terça a Quinta</p>
        <p>12h às 14h30 — 17h às 22h30</p>
        <p>Sexta e Sábado</p>
        <p>12h às 14h30 - 17h às 23h30</p>
        <p>Segunda: Fechado</p>
      </Container>
    </div>
  );
}