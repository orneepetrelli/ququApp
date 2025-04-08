import "../styles/header.css";
import React, { useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Header({ toggleCarrito, visible }) {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = () => {
    if (busqueda.trim() !== "") {
      navigate(`/buscar?query=${encodeURIComponent(busqueda)}`);
    }
  };

  const manejarKeyDown = (e) => {
    if (e.key === "Enter") {
      manejarBusqueda();
    }
  };

  return (
    <header className="custom-header">
      <div className="floating-header">
        <button onClick={() => navigate("/")}>Inicio</button>
        <button>Servicios</button>
        <button>Nosotros</button>
        <button>Contacto</button>
      </div>
      <div className="header-right">
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={manejarKeyDown}
          className="input-busqueda"
        />
        <FaSearch className="icon" onClick={manejarBusqueda} />
        {visible ? (
          <IoMdClose className="icon" onClick={toggleCarrito} />
        ) : (
          <FaShoppingBag className="icon" onClick={toggleCarrito} />
        )}
      </div>
    </header>
  );
}

export default Header;
