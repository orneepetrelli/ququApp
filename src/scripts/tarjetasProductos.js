import React, { useState } from "react";
import chanel from "../img/chanel.jpeg";
import makeup from "../img/makeup.jpeg";
import uñas from "../img/uñas.jpeg";
import zapas from "../img/zapas.jpeg";
import "../styles/tarjetasProductos.css";
import { FaShoppingBag, FaCheck } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function TarjetasProductos({ agregarAlCarrito }) {
  const navigate = useNavigate();
  const [productoAgregadoId, setProductoAgregadoId] = useState(null);
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState({});

  const productos = [
    {
      id: 1,
      nombre: "Traje Chanel",
      precio: 4.6,
      imagen: chanel,
      descuento: "-13%",
      tamaños: ["S", "M", "L"]
    },
    {
      id: 2,
      nombre: "Maquillaje",
      precio: 5.7,
      imagen: makeup,
      descuento: "-22%",
      tamaños: ["30ml", "50ml"]
    },
    {
      id: 3,
      nombre: "Uñas",
      precio: 3.85,
      imagen: uñas,
      descuento: "-30%",
      tamaños: ["Corta", "Media", "Larga"]
    },
    {
      id: 4,
      nombre: "Zapatillas",
      precio: 5.6,
      imagen: zapas,
      descuento: null,
      tamaños: ["36", "38", "40"]
    },
    {
        id: 5,
        nombre: "Zapatillas",
        precio: 5.6,
        imagen: zapas,
        descuento: null,
        tamaños: ["36", "38", "40"]
    },
    {
        id: 6,
        nombre: "Uñas",
        precio: 3.85,
        imagen: uñas,
        descuento: "-30%",
        tamaños: ["Corta", "Media", "Larga"]
    },
    {
        id: 7,
        nombre: "Maquillaje",
        precio: 5.7,
        imagen: makeup,
        descuento: "-22%",
        tamaños: ["30ml", "50ml"]
    },
    {
        id: 8,
        nombre: "Traje Chanel",
        precio: 4.6,
        imagen: chanel,
        descuento: "-13%",
        tamaños: ["S", "M", "L"]
      }
  ];

  const handleAgregarAlCarrito = (producto) => {
    const tamaño = tamañoSeleccionado[producto.id];

    if (!tamaño) {
      alert("Por favor seleccioná un tamaño antes de agregar al carrito.");
      return;
    }

    agregarAlCarrito({ ...producto, tamaño }); 
    setProductoAgregadoId(producto.id);
    setTimeout(() => setProductoAgregadoId(null), 700);
  };

  return (
    <div className="container-products">
      {productos.map((producto) => (
        <div className="card-product" key={producto.id}>
          <div className="container-img">
            <img src={producto.imagen} alt={producto.nombre} />
            {producto.descuento && (
              <span className="discount">{producto.descuento}</span>
            )}
            <div className="button-group">
              <span>
              <i className="fa-regular fa-eye" onClick={() => navigate("/informacionProducto")}></i>
              </span>
              <span>
                <i className="bx bx-bookmark-heart" onClick={() => navigate("/favoritos")}></i>
              </span>
              <span>
                <i className="fa-solid fa-code-compare"></i>
              </span>
            </div>
            <div className="sizes-container">
                {producto.tamaños &&
                  producto.tamaños.map((tamaño) => (
                    <button
                      key={tamaño}
                      className={`tamaño-boton ${
                        tamañoSeleccionado[producto.id] === tamaño
                          ? "seleccionado"
                          : ""
                      }`}
                      onClick={() =>
                        setTamañoSeleccionado({
                          ...tamañoSeleccionado,
                          [producto.id]: tamaño
                        })
                      }
                    >
                      {tamaño}
                    </button>
                  ))}
              </div>
          </div>
          <div className="content-card-product-wrapper">
            <div className="content-card-product">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h3>{producto.nombre}</h3>
              <span
                className="add-cart"
                onClick={() => handleAgregarAlCarrito(producto)}
              >
                {productoAgregadoId === producto.id ? (
                  <FaCheck color="darkgreen" />
                ) : (
                  <FaShoppingBag />
                )}
              </span>
              <p className="price">
                ${producto.precio.toFixed(2)}{" "}
                {producto.descuento && (
                  <span>${(producto.precio * 1.13).toFixed(2)}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TarjetasProductos;
