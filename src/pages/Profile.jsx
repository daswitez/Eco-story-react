import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/profile.css";

const UserProfile = () => {
    const { user } = useAuth(); // Acceder al usuario autenticado desde el contexto
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login"); // Redirige al login si no hay un usuario autenticado
        }
    }, [user, navigate]);

    if (!user) return <p>Cargando...</p>; // Mientras se redirige, muestra un mensaje temporal

    return (
        <main className="profile-section">
            <div className="profile-header">
                <img
                    src={user.profilePicture || "https://via.placeholder.com/150"} // Placeholder si no hay foto
                    alt="Foto de perfil"
                    className="profile-picture"
                />
                <h2 className="profile-name">{user.nombre || "Nombre de Usuario"}</h2>
                <p className="profile-role">{user.rol || "Rol no disponible"}</p>
            </div>
            <section className="profile-info">
                <h3>Información Pública</h3>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">Nombre:</span>
                        <span className="info-value">{user.nombre || "No disponible"}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{user.email || "No disponible"}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Teléfono:</span>
                        <span className="info-value">{user.telefono || "No disponible"}</span>
                    </div>
                </div>
            </section>
            <section className="profile-edit">
                <h3>Editar Información</h3>
                <form className="edit-form">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={user.nombre || ""}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={user.email || ""}
                    />

                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        defaultValue={user.telefono || ""}
                    />

                    <button type="submit" className="primary-btn">
                        Guardar Cambios
                    </button>
                </form>
            </section>
        </main>
    );
};

export default UserProfile;
