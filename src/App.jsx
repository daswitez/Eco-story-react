import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import InteractiveSection from './components/InteractiveSection.jsx';
import TopDonors from './components/TopDonors.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import FundraisingPage from './pages/FundraisingPage.jsx';
import HelpCenter from './pages/HelpCenter.jsx';
import TipsPage from './pages/TipsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import Footer from './components/Footer.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import UserProfile from './pages/Profile.jsx';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
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
                <Route path="/fundraising" element={<FundraisingPage />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/tips-center" element={<TipsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
