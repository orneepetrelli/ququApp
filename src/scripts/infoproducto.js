import React from "react";
import '../styles/infoproducto.css';
import CarouselProducto from "./carouselproducto.js";

//Imágenes import




function Producto() {
    const [colorSeleccionado, setColorSeleccionado] = useState("black");

    const imagenesPorColor = {
      black: ["/img/black1.jpg", "/img/black2.jpg", "/img/black3.jpg"],
      purple: ["/img/purple1.jpg", "/img/purple2.jpg", "/img/purple3.jpg"],
      green: ["/img/green1.jpg", "/img/green2.jpg", "/img/green3.jpg"]
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
            <div className="color-box black" onClick={() => setColorSeleccionado("black")} />
            <div className="color-box purple" onClick={() => setColorSeleccionado("purple")} />
            <div className="color-box green" onClick={() => setColorSeleccionado("green")} />
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