import "../styles/header-style.css";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

function Header() {
  return (

    <header className="custom-header">

  
      <div className="floating-header"> 
        <button>holaa</button>
        <button>miaw</button>
        <button>miaw</button>
        <button>miaw</button>
      </div>

      <div className="header-right">
    
    {/* huh */}
        <FaSearch className="icon" /> 
    {/* Icono CARRITO */}
        <FaShoppingBag className="icon" />
      </div>

    </header>
  );
}

export default Header;