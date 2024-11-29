import React, { useState, useEffect } from 'react';
import '../styles/topDonors.css';

function TopDonors() {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/donaciones/top-donantes'); // Cambia la URL según tu configuración
                const data = await response.json();
                const formattedDonors = data.map((donor, index) => ({
                    rank: index + 1,
                    name: donor.Usuario.nombre,
                    amount: `$${donor.totalDonado}`
                }));
                setDonors(formattedDonors);
            } catch (error) {
                console.error('Error fetching donors:', error);
            }
        };

        fetchDonors();
    }, []);

    return (
        <section className="top-donors-section">
            <h2>Top 10 Donadores Estrellas</h2>
            <p>
                Gracias a nuestros donadores estrellas, estamos un paso más cerca de reconstruir nuestra Amazonia. Cada
                aporte es vital para devolver la vida a nuestros bosques.
            </p>
            <div className="donors-list">
                {donors.map((donor) => (
                    <div className="donor-item" key={donor.rank}>
                        <span className="donor-rank">{donor.rank}</span>
                        <span className="donor-name">{donor.name}</span>
                        <span className="donor-amount">{donor.amount}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopDonors;
