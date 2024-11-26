import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Persistencia de usuario
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    // Función para iniciar sesión
    const login = async (email, password) => {
        const response = await api.post("/login", { email, password });
        if (response.status !== 200) {
            throw new Error(response.data.message || "Error al iniciar sesión");
        }
        const data = response.data;
        localStorage.setItem("user", JSON.stringify(data.usuario));
        setUser(data.usuario);
    };

    // Función para registrar usuarios
    const register = async (formData) => {
        const response = await api.post("/registro", formData);
        if (response.status !== 200) {
            throw new Error(response.data.message || "Error al registrarse");
        }
        return response.data;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
