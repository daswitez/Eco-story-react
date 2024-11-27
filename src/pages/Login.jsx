import React, { useState } from "react";
import "../styles/auth.css"; // Asegúrate de tener el archivo de estilos
import { useAuth } from "../context/AuthContext"; // Contexto de autenticación
import { Link, useNavigate } from "react-router-dom"; // Para la navegación

const Login = () => {
    const { login } = useAuth(); // Hook para acceder al método login del contexto
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // Para manejar errores
    const navigate = useNavigate(); // Hook para la navegación

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);

            // Verifica que el login haya funcionado y los datos se hayan guardado en localStorage
            console.log('Usuario guardado en localStorage:', localStorage.getItem("user"));
            console.log('Token guardado en localStorage:', localStorage.getItem("token"));

            navigate("/profile"); // Redirige a la página de perfil después de un login exitoso
        } catch (error) {
            setError("Error al iniciar sesión. Verifica tus credenciales.");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Iniciar Sesión</h1>
                {error && <p className="error-message">{error}</p>} {/* Mostrar error si hay */}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="primary-btn">Iniciar Sesión</button>
                </form>
                <p>
                    ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
