import React, {useState} from "react";
import '../styles/carouselproducto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselProducto({ imagenes }) {
    const [index, setIndex] = useState(0);
  
    const anterior = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };
  
    const siguiente = () => {
      setIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <button onClick={anterior} className="carousel-btn"><i className='bx bx-chevron-left'></i></button>
        <img src={imagenes[index]} alt={`Producto ${index + 1}`} className="carousel-img" />
        <button onClick={siguiente} className="carousel-btn"><i className='bx bx-chevron-right'></i></button>
      </div>
    );
  }
  
  export default CarouselProducto;
