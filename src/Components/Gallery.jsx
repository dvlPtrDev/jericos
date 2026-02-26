import { Container, Row, Col, Image } from "react-bootstrap";

export default function Gallery() {
  const images = [
    "src/assets/logo-nobg.png",
    "src/assets/logo-nobg.png",
    "src/assets/logo-nobg.png",
    "src/assets/logo-nobg.png",
  ];

  return (
    <Container id="gallery" className="py-5" style={{marginTop: "auto"}}>
      <h2 className="text-center mb-4" style={{color: "var(--red-dark)"}}>Galeria</h2>
      <Row className="g-4">
        {images.map((img, i) => (
          <Col xs={6} md={3} key={i}>
            <Image src={img} rounded fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}