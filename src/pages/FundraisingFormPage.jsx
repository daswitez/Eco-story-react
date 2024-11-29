import { useState } from 'react';
import '../styles/fundraisingForm.css';
import { useNavigate } from 'react-router-dom';

function FundraisingFormPage() {
    const tiposValidos = [
        'Ecología',
        'Reforestacion Urbana',
        'Reforestacion Rural',
        'Reforestacion de Manglares',
        'Reforestacion de Bosques Secos'
    ];

    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        meta: '',
        tipo: tiposValidos[0],
        ubicacion: '',
        fotos: [],
        videos: []
    });

    const [fotos, setFotos] = useState([]);
    const [videos, setVideos] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === 'fotos') {
            setFotos(files);
        } else if (name === 'videos') {
            setVideos(files);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Append text fields
        Object.keys(formData).forEach((key) => {
            if (key !== 'fotos' && key !== 'videos') {
                formDataToSend.append(key, formData[key]);
            }
        });

        // Append files
        for (const file of fotos) {
            formDataToSend.append('fotos', file);
        }
        for (const file of videos) {
            formDataToSend.append('videos', file);
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No estás autenticado');

            const response = await fetch('http://localhost:5000/api/proyectos', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend
            });

            const data = await response.json();

            if (response.ok) {
                alert('Proyecto creado exitosamente');
                navigate('/projects');
            } else {
                alert('Error al crear proyecto: ' + data.message);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Hubo un error al crear el proyecto');
        }
    };

    return (
        <main className="fundraising-form-section">
            <h1>Formulario para Iniciar tu Recaudación</h1>
            <form onSubmit={handleSubmit} className="fundraising-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre del Proyecto:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="meta">Meta de Recaudación:</label>
                    <input
                        type="number"
                        id="meta"
                        name="meta"
                        value={formData.meta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">Tipo de Proyecto:</label>
                    <select
                        id="tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                    >
                        {tiposValidos.map((tipo) => (
                            <option key={tipo} value={tipo}>
                                {tipo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación del Proyecto:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="fotos">Subir Fotos (máximo 5):</label>
                    <input
                        type="file"
                        id="fotos"
                        name="fotos"
                        accept="image/jpeg, image/png, image/gif"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="videos">Subir Videos (máximo 3):</label>
                    <input
                        type="file"
                        id="videos"
                        name="videos"
                        accept="video/mp4, video/mpeg"
                        multiple
                        onChange={handleFileChange}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="primary-btn">
                        Crear Proyecto
                    </button>
                </div>
            </form>
        </main>
    );
}

export default FundraisingFormPage;
