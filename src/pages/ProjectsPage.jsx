import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../styles/projectsPage.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function ProjectsPage() {
    const [projects, setProjects] = useState([]); // Estado para proyectos
    const [loading, setLoading] = useState(true); // Estado para la carga
    const [error, setError] = useState(null); // Estado para errores

    const navigate = useNavigate(); // Declara navigate usando useNavigate

    // Efecto para cargar los proyectos
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/proyectos");
                if (!response.ok) throw new Error("Error al obtener los proyectos");
                const data = await response.json();
                setProjects(data.proyectos || []); // Asigna los proyectos obtenidos
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <Header />
            <main className="projectsPage-main">
                <section id="projectsPage-section">
                    <h2>Proyectos</h2>
                    {loading ? (
                        <p>Cargando proyectos...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <div className="projectsPage-container">
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <div className="projectsPage-card" key={project.id}>
                                        <div className="projectsPage-info">
                                            <h3>{project.nombre}</h3>
                                            <p>{project.descripcion || "Sin descripción"}</p>
                                            {/* Mostrar la imagen del proyecto si existe */}
                                            {project.fotos && project.fotos.length > 0 && (
                                                <img
                                                    src={`http://localhost:5000${project.fotos[0]}`}
                                                    alt={project.nombre}
                                                    className="projectsPage-image"
                                                />
                                            )}

                                            <div className="projectsPage-buttons">
                                                {/* Botón Donar */}
                                                <button
                                                    className="projectsPage-button"
                                                    onClick={() =>
                                                        navigate("/donar", {
                                                            state: { projectId: project.id, projectName: project.nombre },
                                                        })
                                                    }
                                                >
                                                    Donar
                                                </button>

                                                {/* Botón Detalles */}
                                                <button
                                                    className="projectsPage-button"
                                                    onClick={() =>
                                                        navigate("/detalles", {
                                                            state: { projectId: project.id }
                                                        })
                                                    }
                                                >
                                                    Ver Detalles
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No hay proyectos disponibles.</p>
                            )}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProjectsPage;
