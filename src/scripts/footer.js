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

          <a href="https://www.instagram.com/ququappoficial" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-instagram'></i>
          </a>

          <a  href="https://www.tiktok.com/@ququapp?refer=creator_embed" target="_blank" rel="noopener noreferrer">
          <i className = 'bx bxl-tiktok'></i>
          </a>

          <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-facebook'></i>
          </a>

          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-twitter'></i>
          </a>


          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
