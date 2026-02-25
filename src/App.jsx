import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurVenturesPage from './pages/OurVenturesPage';
import MineralsPage from './pages/MineralsPage';
import GoldDiamondsPage from './pages/GoldDiamondsPage';
import TechnologyInvestmentsPage from './pages/TechnologyInvestmentsPage';
import AIIntelligentSystemsPage from './pages/AIIntelligentSystemsPage';
import TelecommunicationsPage from './pages/TelecommunicationsPage';
import MarketingDigitalServicesPage from './pages/MarketingDigitalServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-platform" element={<AboutUsPage />} />
        <Route path="/our-ventures" element={<OurVenturesPage />} />
        <Route path="/our-ventures/natural-resources" element={<MineralsPage />} />
        <Route path="/our-ventures/governance" element={<GoldDiamondsPage />} />
        <Route path="/our-ventures/investment-structuring" element={<TechnologyInvestmentsPage />} />
        <Route path="/our-ventures/digital-systems" element={<AIIntelligentSystemsPage />} />
        <Route path="/our-ventures/telecommunications" element={<TelecommunicationsPage />} />
        <Route path="/our-ventures/ecosystem-partners" element={<MarketingDigitalServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route path="/who-we-are" element={<Navigate to="/our-platform" replace />} />
        <Route path="/gallery-media" element={<Navigate to="/projects" replace />} />
        <Route path="/csr" element={<Navigate to="/projects" replace />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/about-us" element={<Navigate to="/our-platform" replace />} />
        <Route path="/minerals" element={<Navigate to="/our-ventures/natural-resources" replace />} />
        <Route path="/telecommunication" element={<Navigate to="/our-ventures/telecommunications" replace />} />
        <Route path="/ai" element={<Navigate to="/our-ventures/digital-systems" replace />} />

        {/* Legacy venture URLs -> clean venture slugs */}
        <Route path="/our-ventures/mining-minerals" element={<Navigate to="/our-ventures/natural-resources" replace />} />
        <Route path="/our-ventures/gold-diamonds" element={<Navigate to="/our-ventures/governance" replace />} />
        <Route path="/our-ventures/technology-investments" element={<Navigate to="/our-ventures/investment-structuring" replace />} />
        <Route path="/our-ventures/ai-intelligent-systems" element={<Navigate to="/our-ventures/digital-systems" replace />} />
        <Route path="/our-ventures/marketing-digital-services" element={<Navigate to="/our-ventures/ecosystem-partners" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
