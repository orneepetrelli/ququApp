import '../styles/infoproducto.css';
import CarouselProducto from "./carouselproducto.js";
import React, { useState } from "react";
import {
  formatearPrecio,
  aumentarCantidad,
  disminuirCantidad,
  validarCantidad,
  buscarProductoPorColorYTalle
} from "./auxiliar.js";



//Imágenes import ROJO
import camisa_rojo_1 from "../img/camisa_m_rojo_1.jpg";
import camisa_rojo_2 from "../img/camisa_m_rojo_2.jpg";
import camisa_rojo_3 from "../img/camisa_m_rojo_3.jpg";
import camisa_rojo_4 from "../img/camisa_m_rojo_4.jpg";
import camisa_rojo_b from "../img/camisa_m_rojo_b.jpg";
import camisa_rojo_f from "../img/camisa_m_rojo_f.jpg";
//ROSA
import camisa_rosa_1 from "../img/camisa_m_rosa_1.jpg";
import camisa_rosa_2 from "../img/camisa_m_rosa_2.jpg";
import camisa_rosa_3 from "../img/camisa_m_rosa_3.jpg";
import camisa_rosa_4 from "../img/camisa_m_rosa_4.jpg";
import camisa_rosa_b from "../img/camisa_m_rosa_b.jpg";
import camisa_rosa_f from "../img/camisa_m_rosa_f.jpg";
//CELESTE
import camisa_celeste_1 from "../img/camisa_m_celeste_1.jpg";
import camisa_celeste_2 from "../img/camisa_m_celeste_2.jpg";
import camisa_celeste_3 from "../img/camisa_m_celeste_3.jpg";
import camisa_celeste_4 from "../img/camisa_m_celeste_4.jpg";
import camisa_celeste_b from "../img/camisa_m_celeste_b.jpg";
import camisa_celeste_f from "../img/camisa_m_celeste_f.jpg";
//BLANCO
import camisa_blanca_1 from "../img/camisa_m_blanco_1.jpg";
import camisa_blanca_b from "../img/camisa_m_blanco_b.jpg";
import camisa_blanca_f from "../img/camisa_m_blanco_f.jpg";



function InfoProducto({ agregarAlCarrito }) {

  var producto_nombre = "CAMISA CON LINO ZW COLLECTION";
  var producto_ingreso =82636;
  var producto_precio_sin_imp = formatearPrecio(producto_ingreso);
  var producto_precio = formatearPrecio(producto_ingreso + producto_ingreso * 0.21);
  
  const [colorSeleccionado, setColorSeleccionado] = useState("rojo");
  const [talleSeleccionado, setTalleSeleccionado] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const imagenesPorColor = {
    rojo: [camisa_rojo_f,camisa_rojo_b,camisa_rojo_1,camisa_rojo_2,camisa_rojo_3,camisa_rojo_4],
    rosa: [camisa_rosa_f,camisa_rosa_b,camisa_rosa_1,camisa_rosa_2,camisa_rosa_3,camisa_rosa_4],
    blanco: [camisa_blanca_f,camisa_blanca_b,camisa_blanca_1],
    celeste: [camisa_celeste_f,camisa_celeste_b,camisa_celeste_1,camisa_celeste_2,camisa_celeste_3,camisa_celeste_4]
  };

  const talles = ["XS", "S", "M", "L", "XL"];

  const producto = [
    // ROJO
    { id: 11, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rojo_f, color: "rojo", talle: "XS" },
    { id: 12, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rojo_f, color: "rojo", talle: "S" },
    { id: 13, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rojo_f, color: "rojo", talle: "M" },
    { id: 14, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rojo_f, color: "rojo", talle: "L" },
    { id: 15, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rojo_f, color: "rojo", talle: "XL" },
  
    // ROSA
    { id: 21, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rosa_f, color: "rosa", talle: "XS" },
    { id: 22, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rosa_f, color: "rosa", talle: "S" },
    { id: 23, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rosa_f, color: "rosa", talle: "M" },
    { id: 24, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rosa_f, color: "rosa", talle: "L" },
    { id: 25, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_rosa_f, color: "rosa", talle: "XL" },
  
    // CELESTE
    { id: 31, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_celeste_f, color: "celeste", talle: "XS" },
    { id: 32, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_celeste_f, color: "celeste", talle: "S" },
    { id: 33, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_celeste_f, color: "celeste", talle: "M" },
    { id: 34, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_celeste_f, color: "celeste", talle: "L" },
    { id: 35, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_celeste_f, color: "celeste", talle: "XL" },
  
    // BLANCO
    { id: 41, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_blanca_f, color: "blanco", talle: "XS" },
    { id: 42, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_blanca_f, color: "blanco", talle: "S" },
    { id: 43, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_blanca_f, color: "blanco", talle: "M" },
    { id: 44, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_blanca_f, color: "blanco", talle: "L" },
    { id: 45, nombre: "CAMISA CON LINO ZW COLLECTION", precio: producto_precio, imagen: camisa_blanca_f, color: "blanco", talle: "XL" },
  ];
  

  const handleAumentar = () => setCantidad(aumentarCantidad(cantidad));
  const handleDisminuir = () => setCantidad(disminuirCantidad(cantidad));
  const handleCambioManual = (e) => {
    const valor = parseInt(e.target.value);
    setCantidad(validarCantidad(valor));
  };
  const handleAgregarAlCarrito = () => { //PODES CAMBIAR COMO SE MUESTRA EL MENSAJEEEEEEEEEE
    if (!talleSeleccionado) {
      alert("Por favor seleccioná un talle.");
      return;
    }

    const productoSeleccionado = buscarProductoPorColorYTalle(producto, colorSeleccionado, talleSeleccionado);
  
    agregarAlCarrito(productoSeleccionado);
  };
  

  return (
    <div className="Infoproducto-contenedor">

      <div className="Producto-imagen">
      <CarouselProducto imagenes={imagenesPorColor[colorSeleccionado]} />
      </div>

    <div className="Producto-contenedor-info">

    <div className="Producto-info">

    <p className="Producto-nombre">{producto_nombre}</p>
    <p className="Producto-precio">{producto_precio} ARS</p>
    <p className="Producto-precio-sin-imp">*Precio sin impuestos nacionales {producto_precio_sin_imp} ARS</p>
    <p className="Producto-cuotas">Hasta 6 cuotas sin interés</p>

    </div>

    <div className="Producto-elecciones">
    
    <div className="Producto-colores">
    <span>Color: {colorSeleccionado}</span>
      <div className="color-box blanco" onClick={() => setColorSeleccionado("blanco")} />
            <div className="color-box rosa" onClick={() => setColorSeleccionado("rosa")} />
            <div className="color-box celeste" onClick={() => setColorSeleccionado("celeste")} />
            <div className="color-box rojo" onClick={() => setColorSeleccionado("rojo")} />
    </div>

    <div className="Producto-talles">
      <span>Talles:</span>
      {talles.map((talle) => (
        <button
          key={talle}
          onClick={() => setTalleSeleccionado(talle)}
          className={talleSeleccionado === talle ? "talle-seleccionado" : ""}
        >
          {talle}
        </button>
      ))}
    </div>

    <div className="Producto-cantidad">
      <span>Cantidad:</span>
      <button onClick={handleDisminuir}>-</button>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={handleCambioManual}
      />
      <button onClick={handleAumentar}>+</button>
    </div>

    </div> {/*Clase Elecciones*/}

    <div className="Producto-agregar">

    <button className="Producto-agregar-carrito" onClick={handleAgregarAlCarrito}>
  Añadir al carrito
</button>


    <button className="Producto-agregar-favoritos"><i className='bx bx-heart'></i></button>

    </div> {/*Clase Agregar*/}

    </div> {/*Clase contenedora de información*/}


    </div> //Contenedor Info Producto
  );

}

export default InfoProducto;