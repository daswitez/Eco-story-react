import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState } from "react";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <nav className="nav-container">
                <Link to="/" className="logo">
                    <svg viewBox="0 0 50 50" width="40" height="40">
                        <path
                            fill="#1E5631"
                            d="M25,2 C12.85,2 3,11.85 3,24 C3,36.15 12.85,46 25,46 C37.15,46 47,36.15 47,24 C47,11.85 37.15,2 25,2 Z M21,35 L13,27 L16,24 L21,29 L34,16 L37,19 L21,35 Z"
                        />
                    </svg>
                    <span>Eco Acción</span>
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/fundraising" className="nav-link">Recaudación de Fondos</Link>
                    <Link to="/help-center" className="nav-link">Centro de Ayuda</Link>
                    <Link to="/tips-center" className="nav-link">Consejos</Link>
                    <Link to="/projects" className="nav-link">Proyectos</Link>
                    <div className="nav-link dropdown" onClick={toggleDropdown}>
                        <span>Sesión</span>
                        <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                            <Link to="/login" className="dropdown-item">Iniciar Sesión</Link>
                            <Link to="/register" className="dropdown-item">Registrarse</Link>
                        </div>
                    </div>
                    <Link to="/profile" className="nav-link">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="Perfil"
                            className="user-icon"
                        />
                        Mi Perfil
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
