import React from 'react';
import '../styles/profile.css'; // Ajusta la ruta si es necesario

function UserProfile() {
    return (
        <main className="profile-section">
            <div className="profile-header">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto de perfil"
                    className="profile-picture"
                />
                <h2 className="profile-name">Juan Pérez</h2>
                <p className="profile-role">Donador Estrella</p>
            </div>
            <section className="profile-info">
                <h3>Información Pública</h3>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">Nombre:</span>
                        <span className="info-value">Juan Pérez</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">juan.perez@email.com</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Teléfono:</span>
                        <span className="info-value">+591 777-12345</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">País:</span>
                        <span className="info-value">Bolivia</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Última Donación:</span>
                        <span className="info-value">$500</span>
                    </div>
                </div>
            </section>
            <section className="profile-edit">
                <h3>Editar Información</h3>
                <form className="edit-form">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value="Juan Pérez" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value="juan.perez@email.com" />

                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" value="+591 777-12345" />

                    <label htmlFor="country">País:</label>
                    <input type="text" id="country" name="country" value="Bolivia" />

                    <button type="submit" className="primary-btn">
                        Guardar Cambios
                    </button>
                </form>
            </section>
        </main>
    );
}

export default UserProfile;
