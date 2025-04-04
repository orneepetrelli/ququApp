import React, { useRef } from "react";
import "../styles/tarjetas.css";

const Tarjetas = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 350;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 350;
    }
  };

  const items = [
    { image: "https://via.placeholder.com/400", title: "Tarjetiña", description: "Lo que sea" },
    { image: "https://via.placeholder.com/400", title: "Tarjetiña 2", description: "Lo que sea" },
    { image: "https://via.placeholder.com/400", title: "Lucho", description: "Lo que sea" },
    { image: "https://via.placeholder.com/400", title: "Juanito", description: "Lo que sea" },
    { image: "https://via.placeholder.com/400", title: "Pepito", description: "Lo que sea" }
  ];

  return (
    <div className="tarjetas-container">
      <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

      <div className="tarjetas-card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="btn-seleccionar">Seleccionar</button>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default Tarjetas;
