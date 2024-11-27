import React, { useState } from "react";
import "../styles/donatePage.css";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function DonatePage() {
    const [formData, setFormData] = useState({
        monto: "",
        metodoPago: "tarjeta",
        tarjetaNumero: "",
        tarjetaCVV: "",
        tarjetaExpiracion: ""
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { projectId, projectName } = location.state || {};

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Maneja la sumisión del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Recuperar el token y usuario del localStorage
            const token = localStorage.getItem("token"); // Cambiado a una clave consistente
            const usuario = localStorage.getItem("user");

            if (!token || !usuario) {
                throw new Error("No estás autenticado. Por favor, inicia sesión.");
            }

            const parsedUser = JSON.parse(usuario); // Convertir el usuario a un objeto JSON

            // Construir los datos de la donación
            const donationData = {
                monto: parseFloat(formData.monto),
                usuarioId: parsedUser.id,
                proyectoId: projectId,
                metodoPago: formData.metodoPago,
                tarjetaNumero: formData.metodoPago === "tarjeta" ? formData.tarjetaNumero : null,
                tarjetaCVV: formData.metodoPago === "tarjeta" ? formData.tarjetaCVV : null,
                tarjetaExpiracion: formData.metodoPago === "tarjeta" ? formData.tarjetaExpiracion : null
            };

            console.log("Datos de donación enviados:", donationData);

            // Realizar la solicitud POST
            const response = await fetch("http://localhost:5000/api/donaciones/donar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(donationData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("¡Gracias por tu donación!");
                navigate("/projects");
            } else {
                throw new Error(data.message || "Error al realizar la donación.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(error.message);
        }
    };

    return (
        <>
            <Header />
            <main className="donatePage-main">
                <section id="donatePage-section">
                    <h2>Donar al proyecto: {projectName || "Sin nombre"}</h2>
                    {error && <p className="donatePage-error">Error: {error}</p>}
                    <form onSubmit={handleSubmit} className="donatePage-form">
                        <label>
                            Monto:
                            <input
                                type="number"
                                step="0.01"
                                name="monto"
                                value={formData.monto}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Método de pago:
                            <select name="metodoPago" value={formData.metodoPago} onChange={handleChange}>
                                <option value="tarjeta">Tarjeta</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </label>
                        {formData.metodoPago === "tarjeta" && (
                            <>
                                <label>
                                    Número de tarjeta:
                                    <input
                                        type="text"
                                        name="tarjetaNumero"
                                        value={formData.tarjetaNumero}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    CVV:
                                    <input
                                        type="text"
                                        name="tarjetaCVV"
                                        value={formData.tarjetaCVV}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Expiración:
                                    <input
                                        type="date"
                                        name="tarjetaExpiracion"
                                        value={formData.tarjetaExpiracion}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </>
                        )}
                        <button type="submit" className="donatePage-button">Donar</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default DonatePage;
