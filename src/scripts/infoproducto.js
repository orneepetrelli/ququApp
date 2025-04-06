import '../styles/infoproducto.css';
import CarouselProducto from "./carouselproducto.js";
import React, { useState } from "react";

//Imágenes import ROJO
import camisa_rojo_1 from "../img/camisa_m_rojo_1.jpg";
import camisa_rojo_2 from "../img/camisa_m_rojo_2.jpg";
import camisa_rojo_3 from "../img/camisa_m_rojo_3.jpg";
import camisa_rojo_4 from "../img/camisa_m_rojo_4.jpg";
import camisa_rojo_b from "../img/camisa_m_rojo_b.jpg";
import camisa_rojo_f from "../img/camisa_m_rojo_f.jpg";
//ROSA
import camisa_rosa_1 from "../img/camisa_m_rosa_1.jpg";
import camisa_rosa_2 from "../img/camisa_m_rosa_2.jpg";
import camisa_rosa_3 from "../img/camisa_m_rosa_3.jpg";
import camisa_rosa_4 from "../img/camisa_m_rosa_4.jpg";
import camisa_rosa_b from "../img/camisa_m_rosa_b.jpg";
import camisa_rosa_f from "../img/camisa_m_rosa_f.jpg";
//CELESTE
import camisa_celeste_1 from "../img/camisa_m_celeste_1.jpg";
import camisa_celeste_2 from "../img/camisa_m_celeste_2.jpg";
import camisa_celeste_3 from "../img/camisa_m_celeste_3.jpg";
import camisa_celeste_4 from "../img/camisa_m_celeste_4.jpg";
import camisa_celeste_b from "../img/camisa_m_celeste_b.jpg";
import camisa_celeste_f from "../img/camisa_m_celeste_f.jpg";
//BLANCO
import camisa_blanca_1 from "../img/camisa_m_blanco_1.jpg";
import camisa_blanca_b from "../img/camisa_m_blanco_b.jpg";
import camisa_blanca_f from "../img/camisa_m_blanco_f.jpg";

function Producto() {
    const [colorSeleccionado, setColorSeleccionado] = useState("rojo");

    const imagenesPorColor = {
      rojo: [camisa_rojo_f,camisa_rojo_b,camisa_rojo_1,camisa_rojo_2,camisa_rojo_3,camisa_rojo_4],
      rosa: [camisa_rosa_f,camisa_rosa_b,camisa_rosa_1,camisa_rosa_2,camisa_rosa_3,camisa_rosa_4],
      blanco: [camisa_blanca_f,camisa_blanca_b,camisa_blanca_1],
      celeste: [camisa_celeste_f,camisa_celeste_b,camisa_celeste_1,camisa_celeste_2,camisa_celeste_3,camisa_celeste_4]
    };
  
    return (
      <div className="producto-container">
        <div className="imagen-producto">
          <CarouselProducto imagenes={imagenesPorColor[colorSeleccionado]} />
        </div>
  
        <div className="product-info">
          <h2>Remera Tee shirt</h2>
          <p className="price">$70.000</p>
          <p className="cuotas">Hasta 6 cuotas de 80 sin interés</p>
  
          <div className="colors">
            <span>Color:</span>
            <div className="color-box blanco" onClick={() => setColorSeleccionado("blanco")} />
            <div className="color-box rosa" onClick={() => setColorSeleccionado("rosa")} />
            <div className="color-box celeste" onClick={() => setColorSeleccionado("celeste")} />
            <div className="color-box rojo" onClick={() => setColorSeleccionado("rojo")} />
          </div>
  
          <div className="sizes">
            <span>Talles:</span>
            <span className="size">XS</span>
            <span className="size">S</span>
            <span className="size">M</span>
            <span className="size">L</span>
            <span className="size">XL</span>
            <span className="size">XXL</span>
          </div>
  
          <button className="cart-btn">Añadir al carrito</button>
          <span className="heart">🤍</span>
  
          <p className="vendedor">Vendido por: <strong>ZARA</strong></p>
  
          <div className="stars">
            ★★★★★
          </div>
        </div>
      </div>
    );
}

export default Producto;