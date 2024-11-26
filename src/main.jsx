import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import './styles/globals.css';
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
