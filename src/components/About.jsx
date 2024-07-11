import React from "react";
import photo from "../image/photo.jpg";
import "../styles/About_styles.css";

const About = () => {

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CV.pdf';
        link.download = 'CV_Jorge_Manzanares.pdf';
        link.click();
    };

    const handleLinkeInd = () => {
        window.open('https://www.linkedin.com/in/jorge-manzanares-30b63223a/', 'blank');
    };

    const handleGitHub = () => {
        window.open('https://github.com/jmanzanares12', 'blank');
    };

    return (
        <section id='about_me'>
            <div className="container_about">
                <h2 className="label">Sobre mi</h2>
                <div className="container_photo"><img src={photo} alt="George" className="photo" /></div>
                <p className="pharagraph">Egresado de la carrera de Ingenieria en Computación, poseo conocimientos solidos en instalacion de sistemas operativos windows y linux, asi mismo conocimientos basicos de infraestructura de redes y servidores, adentrandome en el mundo de la programacion web.
                </p>
                <p className="pharagraph2">Me considero entuciasta y proactivo, siempre con el afan de aprender las nuevas tendencias y herramientas tecnologicas, sean bienvenidos a mi portafolio.</p>
                <div className="container_button">
                    <button className="button" onClick={handleDownloadCV}>Descargar CV </button>
                    <button className="button" onClick={handleLinkeInd}>LinkeInd </button>
                    <button className="button" onClick={handleGitHub}>GitHub</button>
                </div>
            </div>
        </section>

    );
}

export default About;