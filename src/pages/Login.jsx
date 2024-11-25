import React from "react";
import "../styles/auth.css";

function Login() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Iniciar Sesión</h1>
                <form>
                    <input type="email" placeholder="Correo Electrónico" required />
                    <input type="password" placeholder="Contraseña" required />
                    <button type="submit">Entrar</button>
                </form>
                <p>
                    ¿No tienes una cuenta? <a href="/register">Regístrate</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
