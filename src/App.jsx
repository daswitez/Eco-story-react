import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import InteractiveSection from './components/InteractiveSection.jsx';
import TopDonors from './components/TopDonors.jsx';
import Voluntarios from './components/VolunteerForm.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import FundraisingPage from './pages/FundraisingPage.jsx';
import HelpCenter from './pages/HelpCenter.jsx';
import TipsPage from './pages/TipsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import Footer from './components/Footer.jsx';

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import UserProfile from './pages/Profile.jsx';
import FundraisingFormPage from "./pages/FundraisingFormPage.jsx";
import DonatePage from "./pages/DonatePage.jsx";
import Sugerencias from "./pages/BuzonSugerencia.jsx";
import Detalles from "./pages/ProjectDetails.jsx";


function App() {
    return (
        <Router>
            <Header/>
            <br/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <InteractiveSection/>
                            <TopDonors/>
                            <BenefitsSection/>
                            <Voluntarios/>
                            <Footer/>
                        </div>
                    }
                />
                <Route path="/fundraising" element={<FundraisingPage/>}/>
                <Route path="/help-center" element={<HelpCenter/>}/>
                <Route path="/tips-center" element={<TipsPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
                <Route path="/iniciar-recaudacion" element={<FundraisingFormPage/>}/>
                <Route path="/sugerencias" element={<Sugerencias/>}/>
                <Route path="/detalles" element={<Detalles />}/>
                <Route path="/donar" element={<DonatePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
