import React from "react";
import Tarjetas from "./tarjetas";
import SideBar from "./sidebar";
import Footer from "./footer";
import CarouselInicio from "./carouselInicio.js";
import '../styles/inicio.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio() {
    return (
        <div>
        <SideBar/>
        <CarouselInicio/>
        <Tarjetas/>
        <Footer/>
    </div>
    );
}

export default Inicio; 