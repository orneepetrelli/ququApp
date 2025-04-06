// Reviews.jsx
import React from "react";
import "../styles/reviews.css"; // tu CSS

function Reviews({ comentarios }) {
  return (
    <div className="Reviews-contenedor">
      <h3>Reseñas del producto</h3>
      {comentarios.length === 0 ? (
        <p>No hay reseñas todavía.</p>
      ) : (
        comentarios.map((comentario, index) => (
          <div className="Review" key={index}>
            <p className="Review-nombre"><strong>{comentario.nombre}</strong> dijo:</p>
            <p className="Review-texto">"{comentario.texto}"</p>
            <p className="Review-puntuacion">⭐ {comentario.puntuacion}/5</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;
