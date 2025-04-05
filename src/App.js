import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./scripts/inicio";
import Login from "./scripts/login";
import Productos from "./scripts/productos";
import InfoProducto from "./scripts/infoproducto";
import Carrito from "./scripts/carrito";
import Header from "./scripts/header";

function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <Router>
      <Header toggleCarrito={toggleCarrito} />
      <Carrito visible={carritoVisible} toggleCarrito={toggleCarrito} />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/informacionProducto" element={<InfoProducto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
}

export default App;
