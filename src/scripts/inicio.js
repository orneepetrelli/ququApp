import React from "react";
import Tarjetas from "./tarjetas";
import SideBar from "./sidebar";
import Footer from "./footer";
import '../styles/inicio.css';
import img1 from "../img/CAROUSEL1.jpg";
import img2 from "../img/CAROUSEL2.jpg";
import img3 from "../img/CAROUSEL3.jpg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio() {
    return (
        <div>
        <SideBar/>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <Tarjetas/>
        <Footer/>
    </div>
    );
}

export default Inicio; 