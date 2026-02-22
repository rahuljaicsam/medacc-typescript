import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import HackathonBlog from './pages/HackathonBlog';
import Blogs from './pages/Blogs';
import Toolkit from './pages/Toolkit';
import MapSearch from './pages/subsidiaries/MapSearch';
import Networking from './pages/subsidiaries/Networking';
import RetireImmigrate from './pages/subsidiaries/RetireImmigrate';
import Investment from './pages/subsidiaries/Investment';
import UXUIDesign from './pages/subsidiaries/UXUIDesign';
import Prototype3D from './pages/subsidiaries/Prototype3D';
import CodeTemplate from './pages/subsidiaries/CodeTemplate';
import DataAnalytics from './pages/subsidiaries/DataAnalytics';
import CyberSecurity from './pages/subsidiaries/CyberSecurity';
import TalentFinder from './pages/subsidiaries/TalentFinder';
import Patenting from './pages/subsidiaries/Patenting';
import CRMSales from './pages/subsidiaries/CRMSales';
import Healthcare from './pages/subsidiaries/Healthcare';
import MediaContent from './pages/subsidiaries/MediaContent';
import RDTemplates from './pages/subsidiaries/RDTemplates';
import BlogPost from './pages/BlogPost';
import BiotechCourse from './pages/courses/BiotechCourse';
import BiotechModule from './pages/courses/BiotechModule';
import MedicalCourse from './pages/courses/MedicalCourse';
import MedicalModule from './pages/courses/MedicalModule';
import BioethicsCourse from './pages/courses/BioethicsCourse';
import BioethicsModule from './pages/courses/BioethicsModule';
import RegulatoryCourse from './pages/courses/RegulatoryCourse';
import RegulatoryModule from './pages/courses/RegulatoryModule';
import ClinicalTrialCourse from './pages/courses/ClinicalTrialCourse';
import ClinicalTrialModule from './pages/courses/ClinicalTrialModule';
import GMPCourse from './pages/courses/GMPCourse';
import GMPModule from './pages/courses/GMPModule';
import ISO13485Course from './pages/courses/ISO13485Course';
import ISO13485Module from './pages/courses/ISO13485Module';
import HealthEconomicsCourse from './pages/courses/HealthEconomicsCourse';
import HealthEconomicsModule from './pages/courses/HealthEconomicsModule';
import BiomaterialsCourse from './pages/courses/BiomaterialsCourse';
import BiomaterialsModule from './pages/courses/BiomaterialsModule';
import TechGeneralKnowledgeCourse from './pages/courses/TechGeneralKnowledgeCourse';
import TechGeneralKnowledgeModule from './pages/courses/TechGeneralKnowledgeModule';
import AIHealthcareCourse from './pages/courses/AIHealthcareCourse';
import AIHealthcareModule from './pages/courses/AIHealthcareModule';
import RoboticsHealthcareCourse from './pages/courses/RoboticsHealthcareCourse';
import RoboticsHealthcareModule from './pages/courses/RoboticsHealthcareModule';
import AppDevelopmentHealthcareCourse from './pages/courses/AppDevelopmentHealthcareCourse';
import AppDevelopmentHealthcareModule from './pages/courses/AppDevelopmentHealthcareModule';
import DigitalHealthDataPrivacyCourse from './pages/courses/DigitalHealthDataPrivacyCourse';
import DigitalHealthDataPrivacyModule from './pages/courses/DigitalHealthDataPrivacyModule';
import MedtechPrototypingCourse from './pages/courses/MedtechPrototypingCourse';
import MedtechPrototypingModule from './pages/courses/MedtechPrototypingModule';
import CloudComputingCourse from './pages/courses/CloudComputingCourse';
import CloudComputingModule from './pages/courses/CloudComputingModule';
import MarketAnalysisCourse from './pages/courses/MarketAnalysisCourse';
import MarketAnalysisModule from './pages/courses/MarketAnalysisModule';
import IPPatentStrategyCourse from './pages/courses/IPPatentStrategyCourse';
import IPPatentStrategyModule from './pages/courses/IPPatentStrategyModule';
import LegalGeneralKnowledgeCourse from './pages/courses/LegalGeneralKnowledgeCourse';
import LegalGeneralKnowledgeModule from './pages/courses/LegalGeneralKnowledgeModule';
import StartupFundraisingCourse from './pages/courses/StartupFundraisingCourse';
import StartupFundraisingModule from './pages/courses/StartupFundraisingModule';
import StrategicPartnershipsCourse from './pages/courses/StrategicPartnershipsCourse';
import StrategicPartnershipsModule from './pages/courses/StrategicPartnershipsModule';
import GrantWritingCourse from './pages/courses/GrantWritingCourse';
import GrantWritingModule from './pages/courses/GrantWritingModule';
import BiotechSupplyChainCourse from './pages/courses/BiotechSupplyChainCourse';
import BiotechSupplyChainModule from './pages/courses/BiotechSupplyChainModule';
import ScientificLeadershipCourse from './pages/courses/ScientificLeadershipCourse';
import ScientificLeadershipModule from './pages/courses/ScientificLeadershipModule';
import ExitStrategiesCourse from './pages/courses/ExitStrategiesCourse';
import ExitStrategiesModule from './pages/courses/ExitStrategiesModule';
import StartupProjectAcceleratorCourse from './pages/courses/StartupProjectAcceleratorCourse';
import StartupProjectAcceleratorModule from './pages/courses/StartupProjectAcceleratorModule';
import BiotechInnovationHackathonCourse from './pages/courses/BiotechInnovationHackathonCourse';
import BiotechInnovationHackathonModule from './pages/courses/BiotechInnovationHackathonModule';
import FounderMasterclassCourse from './pages/courses/FounderMasterclassCourse';
import FounderMasterclassModule from './pages/courses/FounderMasterclassModule';
import InvestorPitchWorkshopCourse from './pages/courses/InvestorPitchWorkshopCourse';
import InvestorPitchWorkshopModule from './pages/courses/InvestorPitchWorkshopModule';
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
      <ScrollToTop />
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
        <Route path="/hackathon-blog" element={<HackathonBlog />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/subsidiary/map-search" element={<MapSearch />} />
        <Route path="/subsidiary/networking" element={<Networking />} />
        <Route path="/subsidiary/retire-immigrate" element={<RetireImmigrate />} />
        <Route path="/subsidiary/investment" element={<Investment />} />
        <Route path="/subsidiary/ux-ui-design" element={<UXUIDesign />} />
        <Route path="/subsidiary/3d-prototype" element={<Prototype3D />} />
        <Route path="/subsidiary/code-template" element={<CodeTemplate />} />
        <Route path="/subsidiary/data-analytics" element={<DataAnalytics />} />
        <Route path="/subsidiary/cyber-security" element={<CyberSecurity />} />
        <Route path="/subsidiary/talent-finder" element={<TalentFinder />} />
        <Route path="/subsidiary/patenting" element={<Patenting />} />
        <Route path="/subsidiary/crm-sales" element={<CRMSales />} />
        <Route path="/subsidiary/healthcare" element={<Healthcare />} />
        <Route path="/subsidiary/media-content" element={<MediaContent />} />
        <Route path="/subsidiary/rd-templates" element={<RDTemplates />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/course/biotech" element={<BiotechCourse />} />
        <Route path="/course/biotech/module/:moduleId" element={<BiotechModule />} />
        <Route path="/course/medical" element={<MedicalCourse />} />
        <Route path="/course/medical/module/:moduleId" element={<MedicalModule />} />
        <Route path="/course/bioethics" element={<BioethicsCourse />} />
        <Route path="/course/bioethics/module/:moduleId" element={<BioethicsModule />} />
        <Route path="/course/regulatory" element={<RegulatoryCourse />} />
        <Route path="/course/regulatory/module/:moduleId" element={<RegulatoryModule />} />
        <Route path="/course/clinical-trial" element={<ClinicalTrialCourse />} />
        <Route path="/course/clinical-trial/module/:moduleId" element={<ClinicalTrialModule />} />
        <Route path="/course/gmp" element={<GMPCourse />} />
        <Route path="/course/gmp/module/:moduleId" element={<GMPModule />} />
        <Route path="/course/iso13485" element={<ISO13485Course />} />
          <Route path="/course/iso13485/module/:moduleId" element={<ISO13485Module />} />
          <Route path="/course/health-economics" element={<HealthEconomicsCourse />} />
          <Route path="/course/health-economics/module/:moduleId" element={<HealthEconomicsModule />} />
          <Route path="/course/biomaterials" element={<BiomaterialsCourse />} />
          <Route path="/course/biomaterials/module/:moduleId" element={<BiomaterialsModule />} />
          <Route path="/course/tech-general-knowledge" element={<TechGeneralKnowledgeCourse />} />
          <Route path="/course/tech-general-knowledge/module/:moduleId" element={<TechGeneralKnowledgeModule />} />
          <Route path="/course/ai-healthcare" element={<AIHealthcareCourse />} />
          <Route path="/course/ai-healthcare/module/:moduleId" element={<AIHealthcareModule />} />
          <Route path="/course/robotics-healthcare" element={<RoboticsHealthcareCourse />} />
          <Route path="/course/robotics-healthcare/module/:moduleId" element={<RoboticsHealthcareModule />} />
          <Route path="/course/app-development-healthcare" element={<AppDevelopmentHealthcareCourse />} />
          <Route path="/course/app-development-healthcare/module/:moduleId" element={<AppDevelopmentHealthcareModule />} />
          <Route path="/course/digital-health-data-privacy" element={<DigitalHealthDataPrivacyCourse />} />
          <Route path="/course/digital-health-data-privacy/module/:moduleId" element={<DigitalHealthDataPrivacyModule />} />
          <Route path="/course/medtech-prototyping" element={<MedtechPrototypingCourse />} />
          <Route path="/course/medtech-prototyping/module/:moduleId" element={<MedtechPrototypingModule />} />
          <Route path="/course/cloud-computing-life-sciences" element={<CloudComputingCourse />} />
          <Route path="/course/cloud-computing-life-sciences/module/:moduleId" element={<CloudComputingModule />} />
          <Route path="/course/market-analysis" element={<MarketAnalysisCourse />} />
          <Route path="/course/market-analysis/module/:moduleId" element={<MarketAnalysisModule />} />
          <Route path="/course/ip-patent-strategy" element={<IPPatentStrategyCourse />} />
          <Route path="/course/ip-patent-strategy/module/:moduleId" element={<IPPatentStrategyModule />} />
          <Route path="/course/legal-general-knowledge" element={<LegalGeneralKnowledgeCourse />} />
          <Route path="/course/legal-general-knowledge/module/:moduleId" element={<LegalGeneralKnowledgeModule />} />
          <Route path="/course/startup-fundraising" element={<StartupFundraisingCourse />} />
          <Route path="/course/startup-fundraising/module/:moduleId" element={<StartupFundraisingModule />} />
          <Route path="/course/strategic-partnerships" element={<StrategicPartnershipsCourse />} />
          <Route path="/course/strategic-partnerships/module/:moduleId" element={<StrategicPartnershipsModule />} />
          <Route path="/course/grant-writing" element={<GrantWritingCourse />} />
          <Route path="/course/grant-writing/module/:moduleId" element={<GrantWritingModule />} />
          <Route path="/course/biotech-supply-chain" element={<BiotechSupplyChainCourse />} />
          <Route path="/course/biotech-supply-chain/module/:moduleId" element={<BiotechSupplyChainModule />} />
          <Route path="/course/scientific-leadership" element={<ScientificLeadershipCourse />} />
          <Route path="/course/scientific-leadership/module/:moduleId" element={<ScientificLeadershipModule />} />
          <Route path="/course/exit-strategies" element={<ExitStrategiesCourse />} />
          <Route path="/course/exit-strategies/module/:moduleId" element={<ExitStrategiesModule />} />
          <Route path="/course/startup-project-accelerator" element={<StartupProjectAcceleratorCourse />} />
          <Route path="/course/startup-project-accelerator/module/:moduleId" element={<StartupProjectAcceleratorModule />} />
          <Route path="/course/biotech-innovation-hackathon" element={<BiotechInnovationHackathonCourse />} />
          <Route path="/course/biotech-innovation-hackathon/module/:moduleId" element={<BiotechInnovationHackathonModule />} />
          <Route path="/course/founder-masterclass" element={<FounderMasterclassCourse />} />
          <Route path="/course/founder-masterclass/module/:moduleId" element={<FounderMasterclassModule />} />
          <Route path="/course/investor-pitch-workshop" element={<InvestorPitchWorkshopCourse />} />
          <Route path="/course/investor-pitch-workshop/module/:moduleId" element={<InvestorPitchWorkshopModule />} />
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
