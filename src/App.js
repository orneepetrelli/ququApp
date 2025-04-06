import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inicio from "./scripts/inicio";
import Login from "./scripts/login";
import Productos from "./scripts/productos";
import InfoProducto from "./scripts/infoproducto";
import Carrito from "./scripts/carrito";
import Header from "./scripts/header";
import Favoritos from "./scripts/favoritos";
import SideBar from "./scripts/sidebar";

function App() {
  // const [carritoVisible, setCarritoVisible] = useState(false);

  // const toggleCarrito = () => {
  //   setCarritoVisible(!carritoVisible);
  // };

  const [carritoVisible, setCarritoVisible] = useState(false);
  const toggleCarrito = () => setCarritoVisible(!carritoVisible);
  
  const [cartItems, setCartItems] = useState([]);

  // const toggleCarrito = () => setVisible(!visible);

  const agregarAlCarrito = (producto) => {
    const existe = cartItems.find((item) => item.id === producto.id);
    if (existe) {
      setCartItems(
        cartItems.map((item) =>
          item.id === producto.id ? { ...existe, cantidad: existe.cantidad + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...producto, cantidad: 1 }]);
    }
  };
  const eliminarDelCarrito = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    const existe = cartItems.find((item) => item.id === id);
    if (existe.cantidad === 1) {
      eliminarDelCarrito(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };

  return (
    <Router>
     <Header toggleCarrito={toggleCarrito} visible={carritoVisible} />
<Carrito
  visible={carritoVisible}
  toggleCarrito={toggleCarrito}
  cartItems={cartItems}
  aumentarCantidad={aumentarCantidad}
  disminuirCantidad={disminuirCantidad}
  eliminarDelCarrito={eliminarDelCarrito}
/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />

        <Route path="/informacionProducto" element={<InfoProducto />} />
        {/* <Route path="/carrito" element={<Carrito />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
