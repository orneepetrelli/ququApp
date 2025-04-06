import React from "react";
import '../styles/infoproducto.css';

function CarouselProducto({ imagenes }) {
  return (
    <div id="carouselProducto" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src={img}
              className="d-block w-100"
              alt={`Imagen ${index + 1}`}
              style={{ height: "400px", objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselProducto" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselProducto" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}

export default CarouselProducto;