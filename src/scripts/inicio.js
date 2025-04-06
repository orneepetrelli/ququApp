import React, { useState, useEffect } from "react";
import Tarjetas from "./tarjetas";
import SideBar from "./sidebar";
import Footer from "./footer";
import '../styles/inicio.css';

function Inicio() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalTime = 5000; 
        const increment = 100 / (intervalTime / 100);

        let interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + increment));
        }, 100);

        const carousel = document.querySelector("#carouselExampleIndicators");
      
        const handleSlide = () => {
            setProgress(0); 
        };

        carousel.addEventListener("slide.bs.carousel", handleSlide);

        return () => {
            clearInterval(interval);
            carousel.removeEventListener("slide.bs.carousel", handleSlide);
        };
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <SideBar />

            {}
            <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
                {}
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("C:/Users/belen/OneDrive/Documentos/PROYECTO IMPORTANTE/ququApp/src/img/CAROUSEL1.webp")} className="d-block w-100" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("C:/Users/belen/OneDrive/Documentos/PROYECTO IMPORTANTE/ququApp/src/img/CAROUSEL2.webp")} className="d-block w-100" alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("C:/Users/belen/OneDrive/Documentos/PROYECTO IMPORTANTE/ququApp/src/img/CAROUSEL3.webp")} className="d-block w-100" alt="Imagen 3" />
                    </div>
                </div>
            </div>

            {}
            <div className="container text-center my-5">
                <h1 className="mb-4"> </h1>
                <p className="lead mb-4"></p>
                <div className="my-4">
                    <Tarjetas />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Inicio;