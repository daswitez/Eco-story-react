import React from "react";
import "../styles/helpCenter.css";
import Footer from "../components/Footer.jsx";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

function HelpCenter() {
    return (
        <>
            <main className="container">
                <section className="intro-section">
                    <h2>Centro de Ayuda</h2>
                    <p>
                        Encuentra respuestas a tus preguntas frecuentes, consejos para optimizar tus donaciones y aprende más sobre cómo puedes ayudar al medio ambiente con EcoAcción.
                    </p>
                </section>

                <section className="help-section">
                    <div className="help-content">
                        <div className="faq">
                            <h3>Preguntas Frecuentes</h3>
                            <details>
                                <summary>¿Cómo puedo realizar una donación?</summary>
                                <p>
                                    Para realizar una donación, simplemente dirígete a la sección de donaciones de
                                    nuestra página web...
                                </p>
                            </details>
                            <details>
                                <summary>¿Qué métodos de pago aceptan?</summary>
                                <p>
                                    Aceptamos una amplia variedad de métodos de pago...
                                </p>
                            </details>
                            <details>
                                <summary>¿Puedo ver el impacto de mis donaciones?</summary>
                                <p>
                                    ¡Por supuesto! En la página de cada proyecto, encontrarás actualizaciones
                                    periódicas...
                                </p>
                            </details>
                            <details>
                                <summary>¿Cómo eligen los proyectos que se muestran en la página?</summary>
                                <p>
                                    Los proyectos son seleccionados cuidadosamente por nuestro equipo de expertos...
                                </p>
                            </details>
                            <details>
                                <summary>¿Es seguro donar en línea?</summary>
                                <p>
                                    Sí, nuestro sitio web utiliza tecnología de encriptación avanzada...
                                </p>
                            </details>
                            <details>
                                <summary>¿Qué porcentaje de las donaciones se destina a los proyectos?</summary>
                                <p>
                                    Nos esforzamos por asegurar que la mayor parte de las donaciones...
                                </p>
                            </details>
                            <details>
                                <summary>¿Puedo hacer una donación en nombre de alguien más?</summary>
                                <p>
                                    Sí, puedes realizar una donación en nombre de un ser querido...
                                </p>
                            </details>
                            <details>
                                <summary>¿Ofrecen recibos o comprobantes de donación?</summary>
                                <p>
                                    Sí, una vez que completes tu donación, recibirás un correo electrónico...
                                </p>
                            </details>
                        </div>

                        <aside className="project-cards">
                            <div className="card">
                                <img src={project1} alt="Proyecto 1"/>
                                <h4>Proyecto en Santa Cruz</h4>
                                <button>Ver Proyecto</button>
                            </div>
                            <div className="card">
                                <img src={project2} alt="Proyecto 2"/>
                                <h4>Proyecto en Tarija</h4>
                                <button>Ver Proyecto</button>
                            </div>
                            <div className="card">
                                <img src={project3} alt="Proyecto 3"/>
                                <h4>Proyecto en Cochabamba</h4>
                                <button>Ver Proyecto</button>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default HelpCenter;
