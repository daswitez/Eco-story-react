import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/projectDetails.css";

function ProjectDetails() {
    // Usamos el hook useLocation para acceder al estado pasado por el botón de "Ver Detalles"
    const location = useLocation();
    const { projectId } = location.state || {}; // Obtenemos el projectId

    const [project, setProject] = useState(null); // Estado para almacenar los datos del proyecto
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado para el error

    // Cargar los datos del proyecto al montarse el componente
    useEffect(() => {
        const fetchProject = async () => {
            if (!projectId) return; // Si no se recibe projectId, no hacer la llamada

            try {
                const response = await fetch(`http://localhost:5000/api/proyectos/${projectId}`);
                if (!response.ok) throw new Error("Error al obtener los datos del proyecto");
                const data = await response.json();
                setProject(data.proyecto || {}); // Asigna los datos del proyecto
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    if (loading) {
        return <p>Cargando detalles del proyecto...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!project) {
        return <p>No se encontró el proyecto.</p>;
    }

    return (
        <div className="project-details-section">
            <div className="project-header">
                <h1>{project.nombre}</h1>
                <div className="underline"></div>
            </div>
            <div className="project-image-container">
                {/* Verificamos si hay fotos y mostramos la primera foto */}
                {project.fotos && project.fotos.length > 0 ? (
                    <img
                        src={`http://localhost:5000${project.fotos[0]}`}
                        alt={`Imagen del proyecto ${project.nombre}`}
                        className="project-image"
                    />
                ) : (
                    <p>No hay imagen disponible para este proyecto.</p>
                )}
            </div>
            <div className="project-info">
                <h3>Descripción del Proyecto:</h3>
                <p>{project.descripcion || "Sin descripción disponible"}</p>
                <h3>Detalles:</h3>
                <p><strong>Meta:</strong> ${project.meta}</p>
                <p><strong>Tipo:</strong> {project.tipo}</p>
                <p><strong>Ubicación:</strong> {project.ubicacion}</p>
            </div>
            <button className="action-button">Apoyar este Proyecto</button>
        </div>
    );
}

export default ProjectDetails;
