import "./App.css";
import { Header, HeroSection } from "./components/HeroSection/ProfileHeader";
import { FeaturedWorkSection } from "./components/FeaturedWorkSection/FeaturedWork";
import { ExperienceSection } from "./components/ExperiencesSection/ExperienceSection";
import StackSection from "./components/TechStackSection/TechStackSection";
import CertificatesSection from "./components/CertificateSection/CertificateSection";
import AboutSection from "./components/AboutSection/AboutMe";
import Footer from "./components/FooterSection/FooterSection";
import { BackgroundMesh } from "./components/Shared/BackgroundMesh";
import CustomCursor from "./components/Shared/customCursor";

function App() {
  return (
    <>
      <CustomCursor />

      <div className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-x-clip selection:bg-sunset-bright/20">
        
        <BackgroundMesh />

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
    </>
  );
}

export default App;
