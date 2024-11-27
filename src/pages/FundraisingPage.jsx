import '../styles/fundraising.css';
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

function FundraisingPage() {
    return (
        <main className="fundraising-section">
            <h1>Cómo Iniciar una Recaudación de Fondos</h1>
            <p>
                Ayuda a transformar vidas y restaurar nuestros bosques creando tu propia recaudación de fondos. ¡Es más
                fácil de lo que imaginas!
            </p>

            <section className="steps-section">
                <h2>Pasos para Iniciar tu Recaudación</h2>
                <div className="steps-grid">
                    <div className="step-item">
                        <div className="step-icon">1</div>
                        <h3>Registra tu Proyecto</h3>
                        <p>Describe la causa que quieres apoyar, establece un objetivo y añade imágenes atractivas.</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon">2</div>
                        <h3>Comparte tu Historia</h3>
                        <p>Crea una narrativa impactante que conecte emocionalmente con los donadores potenciales.</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon">3</div>
                        <h3>Invita a tu Comunidad</h3>
                        <p>Comparte tu recaudación en redes sociales, con amigos y familiares para maximizar el impacto.</p>
                    </div>
                    <div className="step-item">
                        <div className="step-icon">4</div>
                        <h3>Monitorea y Actualiza</h3>
                        <p>Informa a tus donadores sobre el progreso y cómo se están utilizando los fondos.</p>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <h2>¿Por qué Iniciar una Recaudación?</h2>
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <img
                            src="https://www.laregion.bo/wp-content/uploads/2019/08/BOMBEROS.jpg"
                            alt="Impacto positivo"
                        />
                        <h3>Genera un Impacto Positivo</h3>
                        <p>Cada recaudación contribuye directamente a restaurar nuestros bosques y ayudar a las comunidades
                            afectadas.</p>
                    </div>
                    <div className="benefit-item">
                        <img
                            src="https://th.bing.com/th/id/OIP.MXLcgQySNQG3yzD7CrFu_gHaE7?rs=1&pid=ImgDetMain"
                            alt="Construye comunidad"
                        />
                        <h3>Construye Comunidad</h3>
                        <p>Involucra a personas apasionadas por la causa y crea un movimiento de cambio positivo.</p>
                    </div>
                    <div className="benefit-item">
                        <img
                            src="https://blog.familiados.com/wp-content/uploads/2019/06/aprendiendo-usar-app-para-adulto-mayor.jpg"
                            alt="Facilidad"
                        />
                        <h3>Plataforma Fácil de Usar</h3>
                        <p>Eco Acción te ofrece herramientas simples para gestionar tu recaudación de manera efectiva.</p>
                    </div>
                </div>
            </section>

            <div className="start-fundraising">
                <Link to="/iniciar-recaudacion">
                    <button className="primary-btn">Inicia tu Recaudación</button>
                </Link>
            </div>
            <br/>
            <Footer/>
        </main>
    );
}

export default FundraisingPage;
