import React from "react";
import "../styles/auth.css";

function Register() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Regístrate</h1>
                <form>
                    <input type="text" placeholder="Nombre Completo" required />
                    <input type="email" placeholder="Correo Electrónico" required />
                    <input type="password" placeholder="Contraseña" required />
                    <input type="tel" placeholder="Teléfono" required />
                    <select required>
                        <option value="">Selecciona tu Rol</option>
                        <option value="donador">Usuario</option>
                        <option value="organizador">Empresa</option>
                    </select>
                    <button type="submit">Crear Cuenta</button>
                </form>
                <p>
                    ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
