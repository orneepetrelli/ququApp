import React from "react";
import chanel from "../img/chanel.jpeg";
import makeup from "../img/makeup.jpeg";
import uñas from "../img/uñas.jpeg";
import zapas from "../img/zapas.jpeg";
import "../styles/tarjetasProductos.css";

function TarjetasProductos() {
    return (
        <div className="container-products">
            <div className="card-product">
                <div className="container-img">
                    <img src={chanel} alt="traje chanel" />
                    <span className="discount">-13%</span>
                    <div className="button-group">
                        <span><i className="fa-regular fa-eye"></i></span>
                        <span><i className="fa-regular fa-heart"></i></span>
                        <span><i className="fa-solid fa-code-compare"></i></span>
                    </div>
                </div>
                <div class="content-card-product-wrapper">
                <div className="content-card-product">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h3>Traje Chanel</h3>
                    <span className="add-cart"><i className="fa-solid fa-basket-shopping"></i></span>
                    <p className="price">$4.60 <span>$5.30</span></p>
                </div>
                {/* <div className="extra-info">
                    Opciones de pago: 3 cuotas sin interés 🔥
                </div> */}
            </div>
            </div>

            <div className="card-product">
                <div className="container-img">
                    <img src={makeup} alt="maquillaje" />
                    <span className="discount">-22%</span>
                    <div className="button-group">
                        <span><i className="fa-regular fa-eye"></i></span>
                        <span><i className="fa-regular fa-heart"></i></span>
                        <span><i className="fa-solid fa-code-compare"></i></span>
                    </div>
                </div>
                <div class="content-card-product-wrapper">
                <div className="content-card-product">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h3>Maquillaje</h3>
                    <span className="add-cart"><i className="fa-solid fa-basket-shopping"></i></span>
                    <p className="price">$5.70 <span>$7.30</span></p>
                </div>
                {/* <div className="extra-info">
                    Opciones de pago: 3 cuotas sin interés 🔥
                </div> */}
                </div>
            </div>

            <div className="card-product">
                <div className="container-img">
                    <img src={uñas} alt="Uñas" />
                    <span className="discount">-30%</span>
                    <div className="button-group">
                        <span><i className="fa-regular fa-eye"></i></span>
                        <span><i className="fa-regular fa-heart"></i></span>
                        <span><i className="fa-solid fa-code-compare"></i></span>
                    </div>
                </div>
                <div class="content-card-product-wrapper">
                <div className="content-card-product">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h3>Uñas</h3>
                    <span className="add-cart"><i className="fa-solid fa-basket-shopping"></i></span>
                    <p className="price">$3.85 <span>$5.50</span></p>
                </div>
                {/* <div className="extra-info">
                    Opciones de pago: 3 cuotas sin interés 🔥
                </div> */}
                </div>
            </div>

            <div className="card-product">
                <div className="container-img">
                    <img src={zapas} alt="zapatillas" />
                    <div className="button-group">
                        <span><i className="fa-regular fa-eye"></i></span>
                        <span><i className="fa-regular fa-heart"></i></span>
                        <span><i className="fa-solid fa-code-compare"></i></span>
                    </div>
                </div>
                <div class="content-card-product-wrapper">
                <div className="content-card-product">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h3>Zapatillas</h3>
                    <span className="add-cart"><i className="fa-solid fa-basket-shopping"></i></span>
                    <p className="price">$5.60</p>
                </div>
                {/* <div className="extra-info">
                    Opciones de pago: 3 cuotas sin interés 🔥
                </div> */}
            </div>
            </div>
        </div>

    );
}

export default TarjetasProductos;

