import "../styles/header.css";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Carrito from "../scripts/carrito.js"
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const irCarrito =()=>{
    navigate("/carrito");
  };

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
        <FaShoppingBag className="icon" onClick={irCarrito}/>
      </div>
    </header>
  );
}

export default Header;
