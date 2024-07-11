import React from "react";
import "../styles/Header_styles.css";

const Header = () => {
    return (
        <header className="container_header">
            <h1 className="label">Portafolio - Jorge Manzanares</h1>
            <nav>
                <ul>
                    <li><a href="#about_me">Sobre mi</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="contact_me">Contáctame</a></li>
                </ul>
            </nav>
        </header>
    );
} 

export default Header;