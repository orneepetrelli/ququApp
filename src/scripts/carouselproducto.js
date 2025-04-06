import React from "react";
import '../styles/infoproducto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*<div id="carouselProducto" className="carousel slide" data-bs-ride="carousel">*/
function CarouselProducto({ imagenes }) {
  return (
    <div id="carouselProducto" className="carousel slide carousel-fade" data-bs-ride="carousel">
    
      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
  src={img}
  className="d-block w-100"
  alt={`Imagen ${index + 1}`}
  style={{
    height: "600px",          // Altura similar a la imagen subida
    objectFit: "contain",     // 🔥 Contiene la imagen sin recortarla
    objectPosition: "center", // Centrada
    backgroundColor: "#fff",  // Fondo blanco para que no quede vacío si no llena todo
    padding: "1rem",          // Un poco de aire si querés
    borderRadius: "0px"       // Quitás bordes redondeados para que no se vean en el cambio
  }}
/>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProducto"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselProducto"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}

export default CarouselProducto;