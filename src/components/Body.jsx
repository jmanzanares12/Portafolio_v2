import React from "react";
import "../styles/Body_styles.css"
import Header from './Header';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
    return (
        <div className="body_main">
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Body;