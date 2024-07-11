import React from "react";
import "../styles/Projects_styles.css";

const projects = [
    {
        title: "tw_card",
        description: "Primeras practicas con el framework react, creacion de primer componente.",
        link: "https://github.com/jmanzanares12/tw_card"
    },
    {
        title: "frontend-escuela",
        description: "Proyecto corresponiente a sistema escolar orientado a la escuela diriangen en Diriamba,Carazo - Nicaragua.",
        link: "https://github.com/jmanzanares12/frontend-escuela"
    },
    {
        title: "Sade",
        description: "Proyecto realizado en HTML, CSS y JavaScript orientado a la escuela diriangen en Diriamba, Carazo - Nicaragua.",
        link: "https://github.com/jmanzanares12/Sade"
    },
    {
        title: "Portafolio - Jorge Manzanares",
        description: "Mi portafolio",
        link: "https://github.com/jmanzanares12/Portafolio"
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <div className="container_projects">
                <h2>Proyectos</h2>
                <div className="projects_lits">
                    {projects.map((projects, index) => (
                        <div key={index} className="project">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <a href={projects.link}>Ir a GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;