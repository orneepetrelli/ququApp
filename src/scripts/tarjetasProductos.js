import React from "react";
import chanel from "../img/chanel.jpeg";
import makeup from "../img/makeup.jpeg";
import uñas from "../img/uñas.jpeg";
import zapas from "../img/zapas.jpeg";
import "../styles/tarjetasProductos.css";
import {FaShoppingBag, FaCheck } from "react-icons/fa";

function TarjetasProductos({ agregarAlCarrito }) {
    const productos = [
      {
        id: 1,
        nombre: "Traje Chanel",
        precio: 4.6,
        imagen: chanel,
        descuento: "-13%"
      },
      {
        id: 2,
        nombre: "Maquillaje",
        precio: 5.7,
        imagen: makeup,
        descuento: "-22%"
      },
      {
        id: 3,
        nombre: "Uñas",
        precio: 3.85,
        imagen: uñas,
        descuento: "-30%"
      },
      {
        id: 4,
        nombre: "Zapatillas",
        precio: 5.6,
        imagen: zapas,
        descuento: null
      }
    ];
  
    return (
      <div className="container-products">
        {productos.map((producto) => (
          <div className="card-product" key={producto.id}>
            <div className="container-img">
              <img src={producto.imagen} alt={producto.nombre} />
              {producto.descuento && <span className="discount">{producto.descuento}</span>}
              <div className="button-group">
                <span><i className="fa-regular fa-eye"></i></span>
                <span><i className="fa-regular fa-heart"></i></span>
                <span><i className="fa-solid fa-code-compare"></i></span>
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
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <FaShoppingBag />
                </span>
                <p className="price">
                  ${producto.precio.toFixed(2)}{" "}
                  {producto.descuento && <span>${(producto.precio * 1.13).toFixed(2)}</span>}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
export default TarjetasProductos;

