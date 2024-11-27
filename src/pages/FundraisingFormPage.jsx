import { useState } from 'react';
import '../styles/fundraisingForm.css';
import { useNavigate } from 'react-router-dom'; // Para redirigir después de crear el proyecto

function FundraisingFormPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        meta: '',
        tipo: '',
        ubicacion: ''
    });

    const navigate = useNavigate(); // Hook de React Router para redirección

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Maneja la sumisión del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Obtén el token del localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No estás autenticado');
            }

            // Verifica que el token se ha recuperado correctamente
            console.log('Token recuperado:', token);

            // Realiza la solicitud POST a la API con el token en los encabezados
            const response = await fetch('http://localhost:5000/api/proyectos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agrega el token en los encabezados
                },
                body: JSON.stringify(formData),
            });

            // Verifica si la respuesta es exitosa
            const data = await response.json();

            console.log('Respuesta del servidor:', data); // Verifica la respuesta completa

            if (response.ok) {
                // Si el proyecto se crea correctamente, muestra el mensaje y redirige
                alert('Proyecto creado exitosamente');
                navigate('/projects'); // Redirige a la página de proyectos
            } else {
                // Si hay un error, muestra el mensaje correspondiente
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
                    <input
                        type="text"
                        id="tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                    />
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
