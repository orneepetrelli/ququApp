import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/login.css";
import { IoLogoTwitch } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";

function Login() {
    return (
        <div>
            {/* <Header /> */}
            <div className="container">
                <div className="container-form">
                    <form className="sig-in">
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
                        <button className="button">INICIAR SESIÓN</button>
                    </form>
                </div>
                <div className="container-form">
                    <form className="sing-up">
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
                        <button className="button">REGISTRARSE</button>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Login;
