import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <footer className="bg-dark py-3 d-flex align-items-center justify-content-between px-4">
      {/* Imagem à esquerda */}
      <img
        src="src/assets/logo.jpeg" 
        alt="Logo Jericos"
        style={{ height: "120px", borderRadius: "25px" }}
      />

      <span className="text-white text-center flex-grow-1">
        © {new Date().getFullYear()} Jericos Burger & Food
      </span>

      <a
        href="https://www.instagram.com/jericosburger"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex justify-content-center align-items-center bg-white rounded-circle"
        style={{ width: "40px", height: "40px", textDecoration: "none" }}
      >
        <i className="bi bi-instagram text-danger" style={{ fontSize: "1.2rem" }}></i>
      </a>
    </footer>
  );
}