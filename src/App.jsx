import "./App.css";
import { Header, HeroSection } from "./components/HeroSection/ProfileHeader";
import { FeaturedWorkSection } from "./components/FeaturedWorkSection/FeaturedWork";
import { ExperienceSection } from "./components/ExperiencesSection/ExperienceSection";
import StackSection from "./components/TechStackSection/TechStackSection";
import CertificatesSection from "./components/CertificateSection/CertificateSection";
import AboutSection from "./components/AboutSection/AboutMe";
import Footer from "./components/FooterSection/FooterSection";

function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      {/* Fixed Sunset Ambient Mesh Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-Right Orb */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#EA6113]/30 to-[#F88F22]/20 blur-[120px]" />
        
        {/* Mid-Left Sunset Dusk Orb */}
        <div className="absolute top-[35%] -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#B84305]/25 to-[#FBB931]/15 blur-[140px]" />
        
        {/* Bottom Accent Orb */}
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#FFE3B3]/10 to-[#EA6113]/20 blur-[130px]" />
      </div>

      {/* Main Page Layout Layer */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturedWorkSection />
          <ExperienceSection />
          <StackSection />
          <CertificatesSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;