import React, { useEffect, useRef, useState } from "react";
import img1 from "../img/inicio_1.jpeg";
import img2 from "../img/inicio_2.jpeg";
import img3 from "../img/inicio_3.jpeg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/carouselInicio.css";

const captions = [
    {
        title: "A nightcap for restless nights",
        button: "Shop new sleep powder"
    },
    {
        title: "Unlock calm mornings",
        button: "Discover our routine"
    },
    {
        title: "The power of rest",
        button: "Explore wellness"
    }
];

function CarouselInicio() {
    const progressRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const progressFill = progressRef.current;

        const triggerProgress = () => {
            if (progressFill) {
                progressFill.style.transition = 'none';
                progressFill.style.width = '0%';
                void progressFill.offsetWidth;
                progressFill.style.transition = 'width 5s linear';
                progressFill.style.width = '100%';
            }
        };

        triggerProgress();

        const interval = setInterval(() => {
            const nextBtn = document.querySelector('.carousel-control-next');
            if (nextBtn) nextBtn.click();
            setCurrentIndex((prev) => (prev + 1) % captions.length);
            triggerProgress();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container position-relative">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + captions.length) % captions.length)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % captions.length)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-caption custom-caption no-transition">
                    <h1>{captions[currentIndex].title}</h1>
                    <button className="btn-shop">{captions[currentIndex].button}</button>
                </div>

                <div className="carousel-progress-bar">
                    <div className="carousel-progress-fill" ref={progressRef}></div>
                </div>
            </div>
        </div>
    );
}

export default CarouselInicio;
