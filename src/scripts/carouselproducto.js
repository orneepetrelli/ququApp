import React from "react";
import '../styles/infoproducto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselProducto({ imagenes }) {
  return (
    <div
      id="carouselProducto"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ backgroundColor: "#fff", borderRadius: "20px" }} // fondo blanco para evitar flashes
    >
      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
  src={img}
  className="d-block w-100 carousel-img"
  alt={`Imagen ${index + 1}`}
  style={{
    maxHeight: "600px",
    objectFit: "contain",
    objectPosition: "center",
    backgroundColor: "white",
    margin: "auto"
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
