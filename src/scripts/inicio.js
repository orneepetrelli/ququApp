import React from "react";
import Tarjetas from "./tarjetas";
import SideBar from "./sidebar";
import Footer from "./footer";
import '../styles/inicio.css';
import img1 from "../img/CAROUSEL1.webp";
import img2 from "../img/CAROUSEL2.webp";
import img3 from "../img/CAROUSEL3.webp";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio() {
    return (
        // <div style={{ position: "relative" }}>
        //     <SideBar />

        //     {}
        //     <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
        //         <div className="carousel-indicators">
        //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         </div>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img src={img1} className="d-block w-100" alt="Imagen 1" />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={img2} className="d-block w-100" alt="Imagen 2" />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={img3} className="d-block w-100" alt="Imagen 3" />
        //             </div>
        //         </div>
        //     </div>

        //     {}
        //     <div className="container text-center my-5">
        //         <h1 className="mb-4"> </h1>
        //         <p className="lead mb-4"></p>
        //         <div className="my-4">
        //             <Tarjetas />
        //         </div>
        //     </div>

        //     <Footer />
        // </div>
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