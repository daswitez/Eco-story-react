import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                {/* Language Selector */}
                <div className="footer-language">
                    <select>
                        <option value="es">España - Español</option>
                        <option value="en">USA - English</option>
                    </select>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <a href="#">Condiciones</a>
                    <a href="#">Declaración de privacidad</a>
                    <a href="#">Información legal</a>
                </div>

                {/* Social Media Icons */}
                <div className="footer-social">
                    <a href="#"><img src="/icons/facebook-color-svgrepo-com.svg" alt="Facebook" /></a>
                    <a href="#"><img src="/icons/youtube-color-svgrepo-com.svg" alt="YouTube" /></a>
                    <a href="#"><img src="/icons/instagram-1-svgrepo-com.svg" alt="Instagram" /></a>
                    <a href="#"><img src="/icons/gorjeo.png" alt="Twitter" /></a>
                </div>

                {/* App Store Links */}
                <div className="footer-apps">
                    <a href="#"><img src="/icons/google-play-download-android-app-logo-svgrepo-com.svg" alt="Google Play" /></a>
                    <a href="#"><img src="/icons/download-on-the-app-store-apple-logo-svgrepo-com.svg" alt="App Store" /></a>
                </div>

                {/* Bottom Text */}
                <div className="footer-bottom">
                    <p>&copy; 2024 EcoAcción - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
