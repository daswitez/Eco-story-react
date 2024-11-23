import '../styles/header.css';

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <a href="/" className="logo">
                    <svg viewBox="0 0 50 50" width="40" height="40">
                        <path fill="#1E5631"
                              d="M25,2 C12.85,2 3,11.85 3,24 C3,36.15 12.85,46 25,46 C37.15,46 47,36.15 47,24 C47,11.85 37.15,2 25,2 Z M21,35 L13,27 L16,24 L21,29 L34,16 L37,19 L21,35 Z" />
                    </svg>
                    <span>Eco Acción</span>
                </a>
                <div className="nav-links">
                    <a href="/inicio" className="nav-link">Inicio</a>
                    <a href="/historia" className="nav-link">Nuestra Historia</a>
                    <a href="/contacto" className="nav-link secondary-link">Contáctanos</a>
                    <a href="/donar" className="nav-link primary-link">Donar</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
