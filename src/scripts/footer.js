import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <h3>quqúApp</h3>
        <div className="footer-links">
          <div>
            <h4>Empresa</h4>
            <a href="#">Sobre nosotros</a>
            <a href="#">Carreras</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h4>Soporte</h4>
            <a href="#">Ayuda</a>
            <a href="#">Contáctanos</a>
            <a href="#">Privacidad</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Términos</a>
            <a href="#">Licencias</a>
            <a href="#">Seguridad</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} quqúApp</p>
        <div className="footer-social">
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook'></i>
          <i className='bx bxl-twitter'></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
