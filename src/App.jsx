import "./App.css";
import { HeroSection } from "./components/HeroSection/ProfileHeader";
import { FeaturedWorkSection } from "./components/FeaturedWorkSection/FeaturedWork";
import { ExperienceSection } from "./components/ExperiencesSection/ExperienceSection";
import {Header} from "./components/HeroSection/ProfileHeader";
import StackSection from "./components/TechStackSection/TechStackSection";
import CertificatesSection from "./components/CertificateSection/CertificateSection";
import AboutSection from "./components/AboutSection/AboutMe";
import Footer from "./components/FooterSection/FooterSection";

function App() {
  return (
    <>
      <Header/>
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <StackSection/>
      <CertificatesSection/>
      <AboutSection/>
      <Footer/>
    </>
  );
}

export default App;
