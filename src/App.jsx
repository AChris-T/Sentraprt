import { Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './hooks/ScrollToTop';
import Home from './pages/Home';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import About from './pages/About';
import Erp from './pages/Erp';
import IT from './pages/IT';
import Robots from './pages/Robots';
import DataAnalytics from './pages/DataAnalytics';
import CloudSolutions from './pages/CloudSolutions';
import CybersecuritySolutions from './pages/CybersecuritySolutions';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Finance from './pages/Finance';
import OilGas from './pages/OilGas';
import PublicSector from './pages/PublicSector';
import Manufacturing from './pages/Manufacturing';
import Others from './pages/Others';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/erp" element={<Erp />} />
        <Route path="/it-outsourcing" element={<IT />} />
        <Route path="/robotic-process-automation-rpa" element={<Robots />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route
          path="/cybersecurity-solutions"
          element={<CybersecuritySolutions />}
        />
        <Route path="/finance-solutions" element={<Finance />} />
        <Route path="/oil-gas" element={<OilGas />} />
        <Route path="/public-sector" element={<PublicSector />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/others" element={<Others />} />
        <Route path="/contact-us" element={<Contact />} />
        {/*  
       
        <Route path="/services" element={<OurService />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/workers-dinner" element={<Dinner />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<JournalDetail />} />
        <Route path="/contact-us" element={<ContatctUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/cultural-events" element={<CCEEvents />} />
        <Route path="/events-form" element={<EventForm />} /> */}

        {/* <Route path="/staff-retention" element={<Staff />} />
        <Route path="/emotional-intelligence" element={<Emotional />} />
        <Route path="/outstanding" element={<Outstanding />} />
        <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
