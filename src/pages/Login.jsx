import React, { useContext, useState } from "react";
import "../styles/auth.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            alert("Inicio de sesión exitoso");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Correo"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
