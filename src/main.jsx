import React from "react";
import ReactDOM from "react-dom/client"; // Importar createRoot de react-dom/client
import App from "./App.jsx";
import './styles/globals.css';
import { AuthProvider } from "./context/AuthContext";

// Crear el root usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
