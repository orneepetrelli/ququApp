import React from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";
import TarjetasProductos from "./tarjetasProductos";

function Productos(){
    return(
        <div>
            <Header/>
            <SideBar/>
            <div>
            <h1>Hola soy Productos</h1>
                <TarjetasProductos/>
            </div>
            <Footer/>
        </div>
    );
}

export default Productos;