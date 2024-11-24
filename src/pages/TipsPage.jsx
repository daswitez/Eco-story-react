import React from "react";
import "../styles/tipsPage.css";
import Header from "../components/Header.jsx";
import recaudaciones from "../assets/images/recaudaciones.jpg";

function TipsPage() {
    return (
        <>
            <Header /> {/* Usamos el Header global */}

            <main className="container">
                <section className="intro-section">
                    <h2>Cómo Recaudar Fondos para una Causa</h2>
                    <img
                        src={recaudaciones} // Correcta referencia a la imagen
                        alt="Crowdfunding"
                        className="intro-image"
                    />
                    <p>
                        Descubre estrategias efectivas para maximizar tus esfuerzos de
                        recaudación de fondos y contribuir a un cambio positivo en el medio
                        ambiente. Estas ideas te ayudarán a conectar con donantes potenciales y
                        asegurar que tus esfuerzos sean lo más efectivos posible. Desde eventos
                        locales hasta campañas virtuales, explora las mejores prácticas para
                        impulsar tus objetivos de recaudación.
                    </p>
                </section>

                <section className="tips-section">
                    <div className="tip">
                        <h3>1. Campañas de Crowdfunding</h3>
                        <p>
                            Las plataformas de crowdfunding son una herramienta increíblemente
                            útil para recaudar fondos. Permiten llegar a una audiencia global y
                            compartir la historia de tu causa con personas que comparten tu
                            visión. Asegúrate de detallar claramente el propósito de tu proyecto
                            y cómo los fondos ayudarán a alcanzarlo.
                        </p>
                    </div>

                    <div className="tip">
                        <h3>2. Donaciones por Mensajes de Texto</h3>
                        <p>
                            Implementar un sistema de donaciones por mensajes de texto puede
                            facilitar las contribuciones rápidas y espontáneas. Este método es
                            ideal para llegar a una audiencia más amplia, ya que la mayoría de
                            las personas tienen acceso a un teléfono móvil.
                        </p>
                    </div>

                    <div className="tip">
                        <h3>3. Crea una Página de Donación Personalizada</h3>
                        <p>
                            Una página de donación personalizada es una excelente manera de
                            maximizar las contribuciones. Diseña una página clara, fácil de
                            navegar y que incluya opciones de pago accesibles. Añade fotos,
                            testimonios y explicaciones detalladas de cómo se utilizarán los
                            fondos para generar confianza en los donantes.
                        </p>
                    </div>

                    <div className="tip">
                        <h3>4. Organiza Eventos Virtuales</h3>
                        <p>
                            Los eventos virtuales, como webinars o conferencias, son una forma
                            efectiva de recaudar fondos sin necesidad de una ubicación física.
                            Puedes incluir charlas educativas, talleres o presentaciones sobre
                            tu causa.
                        </p>
                    </div>

                    <div className="tip">
                        <h3>5. Organiza Eventos Locales</h3>
                        <p>
                            Los eventos locales, como cenas, conciertos benéficos o ferias, son
                            una excelente oportunidad para recaudar fondos y educar a la
                            comunidad sobre tu causa. Considera incluir actividades como rifas,
                            subastas o talleres interactivos para fomentar la participación.
                        </p>
                    </div>

                    <div className="tip">
                        <h3>6. Colabora con Negocios Locales</h3>
                        <p>
                            Asociarte con negocios locales es una excelente manera de recaudar
                            fondos y generar impacto. Habla con restaurantes, cafeterías y
                            tiendas de tu comunidad para organizar eventos conjuntos o
                            promociones especiales en las que un porcentaje de las ventas se
                            destine a tu causa.
                        </p>
                    </div>
                </section>
            </main>

            <footer>
                <p>EcoAcción &copy; 2024 - Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default TipsPage;
