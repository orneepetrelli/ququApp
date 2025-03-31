import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/tarjetas.css'; 

const Tarjetas = ({ flights = [{ image: 'https://via.placeholder.com/150', destination: 'Paris', price: 500 }], handleSelectFlight }) => {
  return (
    <Container>
      <div className="tarjetas-total-card">
        <div className="tarjetas-card-container">
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <div className="card" key={index}>
                <img src={flight.image} alt={flight.destination} />
                <div className="info">
                  <h1>{flight.destination}</h1>
                  <p>Precio: ${flight.price}</p>
                  <Button onClick={() => handleSelectFlight(flight)} variant="primary">
                    Seleccionar
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay vuelos disponibles</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Tarjetas;
