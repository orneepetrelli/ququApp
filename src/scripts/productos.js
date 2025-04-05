import React from "react";
import Footer from "./footer";
import TarjetasProductos from "./tarjetasProductos";

function Productos(){
    return(
        <div>
            <div>
            <h1>Hola soy Productos</h1>
                <TarjetasProductos/>
            </div>
            <Footer/>
        </div>
    );
}

export default Productos;