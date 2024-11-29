import { useState } from 'react';
import '../styles/fundraisingForm.css';
import { useNavigate } from 'react-router-dom';

function FundraisingFormPage() {
    // Define the valid project types
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
        tipo: tiposValidos[0], // Default to the first type
        ubicacion: ''
    });

    const navigate = useNavigate();

    // Handles changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get the token from localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No estás autenticado');
            }

            // Make the POST request to the API with the token in headers
            const response = await fetch('http://localhost:5000/api/proyectos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });

            // Parse the response
            const data = await response.json();

            if (response.ok) {
                // If project is created successfully, show message and redirect
                alert('Proyecto creado exitosamente');
                navigate('/projects');
            } else {
                // If there's an error, show the corresponding message
                alert('Hubo un error al crear el proyecto: ' + data.message);
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
                    <button type="submit" className="primary-btn">Crear Proyecto</button>
                </div>
            </form>
        </main>
    );
}

export default FundraisingFormPage;