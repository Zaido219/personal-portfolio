import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {HeroSection} from "./components/HeroSection/ProfileHeader"; 
import BodyCard from "./components/BodyCard";
import ProjectCard from "./components/ProjectCard";
import Recognition from "./components/Recognition";
import WorkExperienceSection from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/GallerySection";
import { Footer } from "./components/FooterSection";
import EducationExperienceSection from "./components/EducationSection";
import StackSection from "./components/StackSection";
import {FeaturedWorkSection} from "./components/FeaturedWorkSection/FeaturedWork";

function App() {
  return (
    <>
    <HeroSection/>
    <FeaturedWorkSection/>
    </>
  )
}

export default App;