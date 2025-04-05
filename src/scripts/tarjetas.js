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
    { image: pelo, title: "Pelo", hoverText: "Peluqueria" },
    { image: ropa, title: "Ropa", hoverText: "Moda" },
    { image: unas, title: "Uñas", hoverText: "Manicura" },
    { image: maquillaje, title: "Maquillaje", hoverText: "Cosméticos" },
  ];

  const handleCardClick = (title) => {
    console.log(`Clicked on: ${title}`);
  };

  return (
    <div className="tarjetas-container">
      <button className="scroll-btn left" onClick={scrollLeft}>
        &lsaquo;
      </button>

      <div className="tarjetas-card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <button
            key={index}
            className="card-button"
            onClick={() => handleCardClick(item.title)}
          >
            <div className="card-image-container">
              <img src={item.image} className="card-image" alt={item.title} />
              <div className="card-hover-text">{item.hoverText}</div>
            </div>
            {/* <div className="card-title">{item.title}</div> */}
          </button>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        &rsaquo;
      </button>
    </div>
  );
};

export default Tarjetas;