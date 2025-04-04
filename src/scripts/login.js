import React, { useState } from "react";
import "../styles/login.css";
import { IoLogoTwitch, IoLogoTwitter, IoLogoInstagram, IoLogoTiktok, IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import Header from "./header";
import Footer from "./footer";

function Login() {
    const [toggle, setToggle] = useState(false);

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

                <div className="container-welcome">
                    <div className="welcome-sign-up welcome">
                        <h3>¡Bienvenido</h3>
                        <p>Ingrese sus datos personales para usar todas las funciones del sitio.</p>
                        <button className="button-login" onClick={() => setToggle(true)}>Registrarse</button>
                    </div>
                    <div className="welcome-sign-in welcome">
                        <h3>¡Hola!</h3>
                        <p>Regístrese con sus datos personales para usar todas las funciones del sitio.</p>
                        <button className="button-login" onClick={() => setToggle(false)}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
