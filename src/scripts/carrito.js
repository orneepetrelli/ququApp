import React, { useState, useEffect } from "react";
import "../styles/carrito.css";

function Carrito({
  visible,
  toggleCarrito,
  cartItems,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito
}) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (precioTotal, item) => precioTotal + item.precio * item.cantidad,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  if (!visible) return null;

  return (
    <div className="fondo">
      <button className="cerrar-btn" onClick={toggleCarrito}>✕</button>
      <div className="carrito-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="carrito-panel visible">
          <h2 className="titulo-carrito">MY BAG ({cartItems.length})</h2>
          <p className="envio-texto">You qualify for FREE SHIPPING!</p>

          {cartItems.length === 0 ? (
            <div className="carrito-vacio">Your bag is empty.</div>
          ) : (
            <>
              <ul className="lista-productos">
                {cartItems.map((item) => (
                  <li key={item.id} className="producto-carrito">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="producto-img"
                    />
                    <div className="detalle-producto">
                      <div className="nombre-producto">
                        <p className="nombre">{item.nombre}</p>
                        <p className="atributos">
                          {item.color && <span className="color">{item.color}</span>}
                          {item.talle && <span className="talle"> | {item.talle}</span>}
                        </p>
                      </div>
                      <div className="precio-y-controles">
                        <p className="precio-producto">${item.precio}</p>
                        <div className="cantidad-control">
                          <button onClick={() => disminuirCantidad(item.id)}>-</button>
                          <span>{item.cantidad}</span>
                          <button onClick={() => aumentarCantidad(item.id)}>+</button>
                        </div>
                        <button
                          className="eliminar-btn"
                          onClick={() => eliminarDelCarrito(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="subtotal-carrito">
                <span>SUBTOTAL:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">CHECKOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;
