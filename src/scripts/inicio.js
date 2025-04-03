import React from "react";
import Tarjetas from "./tarjetas";
import SideBar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

function Inicio(){
    
    return(
        <div>
            <SideBar />
            <Header />
        
        <div className="container text-center my-5">
            <h1 className="mb-4">Bienvenido a la Página de Inicio</h1>
            <p className="lead mb-4">Aquí podrás ver los servicios disponibles.</p>
            <div className="my-4">
                <Tarjetas />
            </div>
        </div>
        
        <Footer />
    </div>
    );
}

export default Inicio;