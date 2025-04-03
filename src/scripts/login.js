import React, { useState } from "react";
import "../styles/login.css";
import { IoLogoTwitch, IoLogoTwitter, IoLogoInstagram, IoLogoTiktok, IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";

function Login() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle); // Alterna la clase "toggle"
    };

    return (
        <div>
            <div className={`container-login ${toggle ? "toggle" : ""}`}>
                <div className="container-form-login sign-in">
                    <h2>Iniciar Sesión</h2>
                    <div className="social-networks">
                        <IoLogoTwitch className="ion-icon" />
                        <IoLogoTwitter className="ion-icon" />
                        <IoLogoInstagram className="ion-icon" />
                        <IoLogoTiktok className="ion-icon" />
                    </div>
                    <span>Use su correo y contraseña</span>
                    <div className="container-input">
                        <IoMailOutline size={30} color="#000" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="container-input">
                        <IoLockClosedOutline size={30} color="#000" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button className="button-login">INICIAR SESIÓN</button>
                </div>
                <div className="container-form-login sign-up">
                    <h2>Registrarse</h2>
                    <div className="social-networks">
                        <IoLogoTwitch className="ion-icon" />
                        <IoLogoTwitter className="ion-icon" />
                        <IoLogoInstagram className="ion-icon" />
                        <IoLogoTiktok className="ion-icon" />
                    </div>
                    <span>Use su correo electrónico para registrarse</span>
                    <div className="container-input">
                        <IoPersonOutline size={30} color="#000" />
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="container-input">
                        <IoMailOutline size={30} color="#000" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="container-input">
                        <IoLockClosedOutline size={30} color="#000" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="button-login">REGISTRARSE</button>
                </div>
            </div>
            <button id="btn" onClick={handleToggle}>Click</button>
        </div>
    );
}

export default Login;
