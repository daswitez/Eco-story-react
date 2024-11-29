import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Cerrar el menú hamburguesa al cambiar de ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
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

                {/* Menú hamburguesa */}
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
                    <Link to="/fundraising" className="nav-link" onClick={closeMenu}>Recaudación de Fondos</Link>
                    <Link to="/help-center" className="nav-link" onClick={closeMenu}>Centro de Ayuda</Link>
                    <Link to="/tips-center" className="nav-link" onClick={closeMenu}>Consejos</Link>
                    <Link to="/projects" className="nav-link" onClick={closeMenu}>Proyectos</Link>
                    <Link to="/sugerencias" className="nav-link" onClick={closeMenu}>Sugerencias</Link>


                    {/* Enlace al perfil */}
                    <Link to="/profile" className="nav-link profile-link" onClick={closeMenu}>
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
