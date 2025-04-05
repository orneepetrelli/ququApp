import React from "react";
import Footer from "./footer";
import TarjetasProductos from "./tarjetasProductos";
import SideBar from "./sidebar";

function Productos({ agregarAlCarrito }){
    return(
        <div>
            <SideBar/>
            <div>
            <h1>Hola soy Productos</h1>
            <TarjetasProductos agregarAlCarrito={agregarAlCarrito} />
            </div>
            <Footer/>
        </div>
    );
}

export default Productos;