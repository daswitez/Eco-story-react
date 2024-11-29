import React, { useState } from "react";
import "../styles/sugerencias.css";
import "../components/Footer.jsx"
import Footer from "../components/Footer.jsx";

function SuggestionBox() {
    const [suggestion, setSuggestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Sugerencia enviada: ${suggestion}`);
        setSuggestion("");
    };

    return (
        <div className="suggestion-box">
            <h3>¡Envía tu Sugerencia!</h3>
            <h4>Tu opinión nos importa</h4>
            <p>
                Valoramos tus ideas y comentarios para mejorar continuamente nuestros servicios.
                ¡Gracias por ser parte de nuestro crecimiento!
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Escribe tu sugerencia aquí..."
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
            <Footer/>
        </div>

    );

}

export default SuggestionBox;
