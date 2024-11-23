import '../styles/topDonors.css';

function TopDonors() {
    const donors = [
        { rank: 1, name: 'Ana Fernández', amount: '$10,000' },
        { rank: 2, name: 'Carlos Rojas', amount: '$8,500' },
        { rank: 3, name: 'María López', amount: '$7,800' },
        { rank: 4, name: 'Javier Cruz', amount: '$6,700' },
        { rank: 5, name: 'Luisa Méndez', amount: '$5,500' },
        { rank: 6, name: 'Fernando Torres', amount: '$4,200' },
        { rank: 7, name: 'Claudia Vargas', amount: '$3,900' },
        { rank: 8, name: 'Pablo González', amount: '$3,700' },
        { rank: 9, name: 'Elena Castillo', amount: '$3,500' },
        { rank: 10, name: 'Ricardo Morales', amount: '$3,000' },
    ];

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
