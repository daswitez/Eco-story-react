import Carousel from './components/Carousel.jsx';
import Header from './components/Header.jsx';
import InteractiveSection from './components/InteractiveSection.jsx';
import TopDonors from './components/TopDonors.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <InteractiveSection />
            <TopDonors />
            <BenefitsSection />
            {/* Otras secciones */}
        </div>
    );
}

export default App;
