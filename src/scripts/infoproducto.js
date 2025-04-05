import React from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

function InfoProducto(){
    return(
        <div>
            <Header/>
            <SideBar/>
            <div>
                <h1>Hola soy info del producto</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default InfoProducto;