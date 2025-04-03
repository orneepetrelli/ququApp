import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/tarjetas.css";

const Tarjetas = ({
  items = [
    { image: "https://via.placeholder.com/150", title: " tarjetiña ", description: " lo que sea" },
    { image: "https://via.placeholder.com/150", title: " tarjetiña ", description: " lo que sea" },
    { image: "https://via.placeholder.com/150", title: " lucho ", description: " lo que sea" },
    { image: "https://via.placeholder.com/150", title: " lucho ", description: " lo que sea" },
    { image: "https://via.placeholder.com/150", title: " asdkasj ", description: " lo que sea" }
  ],
  handleSelectItem,
}) => {
  return (
    <Container>
      <div className="tarjetas-total-card">
        <div className="tarjetas-card-container">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="info">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button onClick={() => handleSelectItem(item)} variant="primary">
                    Seleccionar
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay tarjetasssssssss</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Tarjetas;
