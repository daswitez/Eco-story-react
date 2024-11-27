import React, { useContext, useState } from "react";
import "../styles/auth.css";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

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
            await register(formData); // Llamar a la función de registro en el contexto
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
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Correo"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            name="telefono"
                            id="telefono"
                            type="text"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="rol">Rol</label>
                        <select
                            name="rol"
                            id="rol"
                            value={formData.rol}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccionar Rol</option>
                            <option value="usuario">Usuario</option>
                            <option value="administrador">Administrador</option>
                        </select>
                    </div>

                    <button type="submit" className="primary-btn">Registrarse</button>
                </form>
                <p className="redirect-link">
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
