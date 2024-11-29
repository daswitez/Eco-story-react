import React, { useState } from "react";
import "../styles/volunteerForm.css";

function VolunteerForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        nacionalidad: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`¡Gracias por registrarte, ${formData.nombre}!`);
        setFormData({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            nacionalidad: "",
        });
    };

    return (
        <section className="volunteer-form-section">
            <h2>¡Únete como Voluntario!</h2>
            <p>Regístrate para ser parte de nuestras actividades y ayudar al medio ambiente.</p>
            <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Número de Teléfono"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="nacionalidad"
                        value={formData.nacionalidad}
                        onChange={handleChange}
                        placeholder="Nacionalidad"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Registrarme</button>
            </form>
        </section>
    );
}

export default VolunteerForm;
