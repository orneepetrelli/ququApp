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

  return (
    <div className="tarjetas-container">
      <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

      <div className="tarjetas-card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} className="card-image" />
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default Tarjetas;
