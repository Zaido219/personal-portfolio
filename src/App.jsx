import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HeroSection } from "./components/HeroSection/ProfileHeader";
import BodyCard from "./components/BodyCard";
import ProjectCard from "./components/ProjectCard";
import Recognition from "./components/Recognition";
import WorkExperienceSection from "./components/WorkExperience";
import Gallery from "./components/GallerySection";
import EducationExperienceSection from "./components/EducationSection";
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
