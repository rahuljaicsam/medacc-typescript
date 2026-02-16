import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import Hackathon from '../sections/Hackathon';
import WhyAcceleration from '../sections/WhyAcceleration';
import LatestLaunch from '../sections/LatestLaunch';
import FounderTestimony from '../sections/FounderTestimony';
import TransformResearch from '../sections/TransformResearch';
import Blog from '../sections/Blog';
import TopCompanies from '../sections/TopCompanies';
import LoginPortal from '../sections/LoginPortal';
import FAQ from '../sections/FAQ';
import Collaboration from '../sections/Collaboration';
import Venues from '../sections/Venues';
import Subsidiaries from '../sections/Subsidiaries';
import EbookCTA from '../sections/EbookCTA';
import CourseAd from '../sections/CourseAd';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CourseAd />
        <Hackathon />
        <WhyAcceleration />
        <LatestLaunch />
        <FounderTestimony />
        <TransformResearch />
        <Blog />
        <TopCompanies />
        <LoginPortal />
        <FAQ />
        <Collaboration />
        <Venues />
        <Subsidiaries />
        <EbookCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
