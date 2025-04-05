import React, { useState, useEffect } from "react";
import "../styles/carrito.css"; // Archivo CSS con animaciones

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

  return (
    <div className={`carrito-panel ${visible ? "visible" : ""}`}>
      <button className="cerrar-btn" onClick={toggleCarrito}>X</button>
      <h1>Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div>El carrito está vacío</div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.nombre} - Precio: ${item.precio} - Cantidad: {item.cantidad}
                <div>
                  <button onClick={() => aumentarCantidad(item.id)}>+</button>
                  <button onClick={() => disminuirCantidad(item.id)}>-</button>
                  <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                </div>
                Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
              </li>
            ))}
          </ul>
          <div>
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
          <button>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}
export default Carrito;