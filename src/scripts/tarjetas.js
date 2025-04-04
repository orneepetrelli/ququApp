import React, { useRef } from "react";
import "../styles/tarjetas.css";

const Tarjetas = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400;
    }
  };

  const items = [
    { image: "https://via.placeholder.com/400", title: "Tarjetiña" },
    { image: "https://via.placeholder.com/400", title: "Lucho" },
    { image: "https://via.placeholder.com/400", title: "Juanito" },
    { image: "https://via.placeholder.com/400", title: "Pepito" },
    { image: "https://via.placeholder.com/400", title: "Miau" }
  ];

  return (
    <div className="tarjetas-container">
      <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

      <div className="tarjetas-card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h2 className="card-title">{item.title}</h2>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default Tarjetas;
