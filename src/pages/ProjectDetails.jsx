import "../styles/projectDetails.css";

function ProjectDetails() {
    const project = {
        nombre: "Reforestación Urbana",
        descripcion: "Este proyecto busca plantar 1,000 árboles en áreas urbanas para mejorar la calidad del aire y embellecer la ciudad.",
        meta: 50000,
        tipo: "Reforestación Urbana",
        ubicacion: "Ciudad de México, México",
        imagen: "https://th.bing.com/th/id/OIP.nFV2ObrNdHveGQrRHhnx1QHaE8?rs=1&pid=ImgDetMain", // URL de imagen hardcodeada
    };

    return (
        <div className="project-details-section">
            <div className="project-header">
                <h1>{project.nombre}</h1>
                <div className="underline"></div>
            </div>
            <div className="project-image-container">
                <img src={project.imagen} alt={`Imagen del proyecto ${project.nombre}`} />
            </div>
            <div className="project-info">
                <h3>Descripción del Proyecto:</h3>
                <p>{project.descripcion}</p>
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
