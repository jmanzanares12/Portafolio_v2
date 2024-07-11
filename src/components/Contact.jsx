import React from "react";
import "../styles/Contact_styles.css";

const emails = [
    {
        address: "jimgken2004@example.com"
    },
    {
        address: "jimgken2012@example.com"
    },
    {
        address: "manzanares.jorge.jm@example.com"
    }
];

const Contact = () => {
    return (
        <section id="contact_me">
            <div className="contact_container">
                <h2>Contáctame</h2>
                <p>Puedes contactarme a cualquiera de mis correos:</p>
                <ul>
                    {emails.map((email, index) => (
                        <li key={index}>
                            <a href={`mailto:${email.address}`}>{email.address}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Contact;
