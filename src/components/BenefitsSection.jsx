import '../styles/benefitsSection.css';
import reforestar from '../assets/images/reforestar.jpg';
import cleanAirImage from '../assets/images/sky-2251992_1280.jpg';
import supportCommunitiesImage from '../assets/images/chiquitania.jpg';


function BenefitsSection() {
    const benefits = [
        {
            title: 'Reforestar los bosques',
            description: 'Ayuda a plantar árboles que restauren el ecosistema natural y ofrezcan hábitats seguros para la fauna.',
            image: reforestar,
        },
        {
            title: 'Aire más limpio',
            description: 'La reforestación absorbe CO₂ y mejora la calidad del aire, ayudando a combatir el cambio climático.',
            image: cleanAirImage,
        },
        {
            title: 'Apoyar a comunidades',
            description: 'Tu donación beneficia directamente a las familias afectadas, proporcionando recursos y esperanza.',
            image: supportCommunitiesImage,
        },
    ];


    return (
        <section className="benefits-section">
            <h2>¿Por qué donar?</h2>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                        <img src={benefit.image} alt={benefit.title} />
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BenefitsSection;
