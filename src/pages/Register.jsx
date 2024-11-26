import React, { useContext, useState } from "react";
import "../styles/auth.css";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        telefono: "",
        rol: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            alert("Registro exitoso. Revisa tu correo para verificar tu cuenta.");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
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
                    <input
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    <select
                        name="rol"
                        value={formData.rol}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona tu Rol</option>
                        <option value="usuario">Usuario</option>
                        <option value="empresa">Empresa</option>
                    </select>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
