import React from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

function Productos(){
    return(
        <div>
            <Header/>
            <SideBar/>
            <div>
                <h1>Hola soy Productos</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Productos;