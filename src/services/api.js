import axios from 'axios';

// Crear la instancia de axios
const api = axios.create({
    baseURL: "http://localhost:5000/api", // Asegúrate de usar la URL correcta
});

// Configurar el token en los encabezados para todas las peticiones
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Incluir el token en el header
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
