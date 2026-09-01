import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HeroSection } from "./components/HeroSection/ProfileHeader";
import BodyCard from "./components/BodyCard";
import ProjectCard from "./components/ProjectCard";
import Recognition from "./components/Recognition";
import WorkExperienceSection from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/GallerySection";
import { Footer } from "./components/FooterSection";
import EducationExperienceSection from "./components/EducationSection";
import { FeaturedWorkSection } from "./components/FeaturedWorkSection/FeaturedWork";
import { ExperienceSection } from "./components/ExperiencesSection/ExperienceSection";
import {Header} from "./components/HeroSection/ProfileHeader";
import StackSection from "./components/TechStackSection/TechStackSection";
import CertificatesSection from "./components/CertificateSection/CertificateSection";

function App() {
  return (
    <>
      <Header/>
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <StackSection/>
      <CertificatesSection/>
    </>
  );
}

export default App;
