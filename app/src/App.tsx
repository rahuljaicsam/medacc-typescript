import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Library from './pages/Library';
import CoFounderMatching from './pages/CoFounderMatching';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Apply from './pages/Apply';
import StartupDirectory from './pages/StartupDirectory';
import Syllabus from './pages/Syllabus';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import GeneralKnowledgeCourse from './pages/courses/GeneralKnowledgeCourse';
import ScienceAndNature from './pages/courses/modules/ScienceAndNature';
import HistoryAndGeography from './pages/courses/modules/HistoryAndGeography';
import MathematicsAndLogic from './pages/courses/modules/MathematicsAndLogic';
import LiteratureAndArts from './pages/courses/modules/LiteratureAndArts';
import PoliticsAndEconomics from './pages/courses/modules/PoliticsAndEconomics';
import TechnologyAndInnovation from './pages/courses/modules/TechnologyAndInnovation';
import SportsAndEntertainment from './pages/courses/modules/SportsAndEntertainment';
import PhilosophyAndReligion from './pages/courses/modules/PhilosophyAndReligion';
import FinalKnowledgeAssessment from './pages/courses/modules/FinalKnowledgeAssessment';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/library" element={<Library />} />
        <Route path="/co-founder-matching" element={<CoFounderMatching />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/startup-directory" element={<StartupDirectory />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/general-knowledge-foundations" element={<GeneralKnowledgeCourse />} />
        <Route path="/course/general-knowledge-foundations/module-1" element={<ScienceAndNature />} />
        <Route path="/course/general-knowledge-foundations/module-2" element={<HistoryAndGeography />} />
        <Route path="/course/general-knowledge-foundations/module-3" element={<MathematicsAndLogic />} />
        <Route path="/course/general-knowledge-foundations/module-4" element={<LiteratureAndArts />} />
        <Route path="/course/general-knowledge-foundations/module-5" element={<PoliticsAndEconomics />} />
        <Route path="/course/general-knowledge-foundations/module-6" element={<TechnologyAndInnovation />} />
        <Route path="/course/general-knowledge-foundations/module-7" element={<SportsAndEntertainment />} />
        <Route path="/course/general-knowledge-foundations/module-8" element={<PhilosophyAndReligion />} />
        <Route path="/course/general-knowledge-foundations/module-9" element={<FinalKnowledgeAssessment />} />
      </Routes>
    </Router>
  );
}

export default App;
