import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import InteractiveSection from './components/InteractiveSection.jsx';
import TopDonors from './components/TopDonors.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import FundraisingPage from './pages/FundraisingPage.jsx';
import UserProfile from './pages/Profile.jsx';
import HelpCenter from "./pages/HelpCenter.jsx";
import TipsPage from "./pages/TipsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Ruta para la página principal */}
                <Route
                    path="/"
                    element={
                        <div>
                            <InteractiveSection />
                            <TopDonors />
                            <BenefitsSection />
                            <Footer />
                        </div>
                    }
                />
                {/* Ruta para la página de Recaudación de Fondos */}
                <Route path="/fundraising" element={<FundraisingPage />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/tips-center" element={<TipsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
