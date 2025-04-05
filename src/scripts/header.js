import "../styles/header.css";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Carrito from "../scripts/carrito.js"

function Header({ toggleCarrito }) {
  return (
    <header className="custom-header">
      <div className="floating-header"> 
        <button>Inicio</button>
        <button>Servicios</button>
        <button>Nosotros</button>
        <button>Contacto</button>
      </div>
      <div className="header-right">
        <FaSearch className="icon" />
        <FaShoppingBag className="icon" onClick={toggleCarrito}/>
      </div>
    </header>
  );
}

export default Header;
