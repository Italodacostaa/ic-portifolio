import React from 'react';
import './Footer.css'; // Importe o CSS tradicional para o Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados. Projetado e codificado por{" "}
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/italo-costa-75b8a31a8/" 
            target="_blank"
            rel="noreferrer noopener"
          >
            IC | Italo Costa
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;