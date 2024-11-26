import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import api from "../services/api";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Recuperar el usuario del almacenamiento local
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await api.post("/login", { email, password });
            if (response.status !== 200) {
                throw new Error(response.data.message || "Error al iniciar sesión");
            }
            const data = response.data;
            localStorage.setItem("user", JSON.stringify(data.usuario)); // Guardar usuario en localStorage
            localStorage.setItem("token", data.token); // Guardar token para peticiones futuras
            setUser(data.usuario); // Actualizar estado de usuario
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            throw error;
        }
    };

    const register = async (formData) => {
        try {
            const response = await api.post("/registro", formData);
            if (response.status !== 200) {
                throw new Error(response.data.message || "Error al registrarse");
            }
            return response.data;
        } catch (error) {
            console.error("Error al registrarse:", error.message);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("user"); // Limpiar almacenamiento local
        localStorage.removeItem("token");
        setUser(null); // Limpiar estado de usuario
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para consumir el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
