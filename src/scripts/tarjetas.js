import React, { useRef } from "react";
import "../styles/tarjetas.css";
import maquillaje from "../img/maquillaje.png";
import pelo from "../img/pelo.jpeg";
import ropa from "../img/ropa.jpeg";
import unas from "../img/unas.jpeg";

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
    { image: pelo, title: "Pelo" },
    { image: ropa, title: "Ropa" },
    { image: unas, title: "Uñas" },
    { image: maquillaje, title: "Maquillaje" },
  ];

  const handleCardClick = (title) => {
   
    console.log(`Clicked on: ${title}`);

  };

  return (
    <div className="tarjetas-container">
      <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

      <div className="tarjetas-card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <button
            key={index}
            className="card-button" 
            onClick={() => handleCardClick(item.title)}
          >
            <img src={item.image} className="card-image" alt={item.title} />
            {}
            {}
          </button>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default Tarjetas;