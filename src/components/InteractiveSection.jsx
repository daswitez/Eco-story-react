import Carousel from './Carousel.jsx';
import '../styles/interactiveSection.css';

function InteractiveSection() {
    return (
        <section className="interactive-section">
            <div className="text-content">
                <h2>¡Nuestra Amazonia boliviana necesita tu ayuda!</h2>
                <p>
                    Los incendios forestales han devastado millones de hectáreas de nuestro preciado bosque amazónico.
                    La vida silvestre ha perdido su hogar, comunidades enteras se han visto afectadas y nuestro clima está
                    en riesgo. ¡Únete a nosotros para reconstruir lo que el fuego destruyó!
                </p>
            </div>
            <Carousel />
        </section>
    );
}

export default InteractiveSection;
