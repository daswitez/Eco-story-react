import React from "react";
import "../styles/projectsPage.css";
import santaCruzImage from "../assets/images/santa_cruz.jpg";
import chiquitanosImage from "../assets/images/bosques_chiquitanos.jpg";
import tarijaImage from "../assets/images/tarija.jpg";
import Header from "../components/Header.jsx";

function ProjectsPage() {
    return (
        <>
            <Header /> {/* Navegación global */}
            <main className="projects-main">
                <section id="proyectos">
                    <h2>Proyectos Destacados</h2>
                    <div className="proyectos-container">
                        <div className="proyecto">
                            <img src={santaCruzImage} alt="Reforestación en Santa Cruz" />
                            <div className="proyecto-info">
                                <h3>Reforestación en Santa Cruz</h3>
                                <p>
                                    Los incendios han devastado miles de hectáreas en la Amazonía boliviana, dejando un paisaje
                                    desolador. Con tu donación, podemos plantar árboles y recuperar este ecosistema crucial para
                                    el planeta.
                                </p>
                                <button className="btn-donar">Donar</button>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={chiquitanosImage} alt="Bosques Chiquitanos" />
                            <div className="proyecto-info">
                                <h3>Bosques Chiquitanos</h3>
                                <p>
                                    El fuego ha afectado a numerosas comunidades y especies únicas en esta región. Este proyecto
                                    busca restaurar los bosques nativos y apoyar a las familias locales que dependen de ellos.
                                </p>
                                <button className="btn-donar">Donar</button>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={tarijaImage} alt="Reforestación en Tarija" />
                            <div className="proyecto-info">
                                <h3>Reforestación en Tarija</h3>
                                <p>
                                    La deforestación ha causado un impacto irreversible en Tarija. Con tu ayuda, podemos
                                    restaurar las áreas afectadas, proteger las cuencas hidrográficas y garantizar un futuro
                                    sostenible.
                                </p>
                                <button className="btn-donar">Donar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 EcoAcción. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}

export default ProjectsPage;
