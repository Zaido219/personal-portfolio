import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileHeader from "./components/ProfileHeader"; 
import BodyCard from "./components/BodyCard";
import ProjectCard from "./components/ProjectCard";
import Recognition from "./components/Recognition";
import WorkExperienceSection from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/GallerySection";
import { Footer } from "./components/FooterSection";
import EducationExperienceSection from "./components/EducationSection";
import StackSection from "./components/StackSection";

function App() {
  return (
    <>
      {/* CRITICAL UX CHECK: Ensure <BodyCard> uses 'w-full' or 'max-w-viewport' 
        internally so it doesn't force a desktop width on mobile!
      */}
      <BodyCard>
        <ProfileHeader />
        
        {/* 1. MAIN CONTAINER: Fluid w-full on mobile to prevent viewport zooming */}
        <div className="flex flex-col justify-center w-full max-w-full md:max-w-5xl md:mx-auto p-1 overflow-hidden">
          
          {/* 2. THE DESKTOP CORE GRID: Strictly fluid 'w-full' on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 p-1 w-full box-border">
            
            {/* Quadrant A: Experience Section */}
            <div className="flex flex-col w-87 md:w-full md:order-1">
              <WorkExperienceSection />
            </div>

            {/* Quadrant B: Certifications/Recognition */}
            <div className="w-full md:order-3">
               <Recognition />
            </div>

            {/* Quadrant C: Recent Projects */}
            <div className="flex flex-col items-center w-full md:order-2 md:row-span-2">
                <ProjectCard />
            </div>

          </div>
           <StackSection />
          {/* 3. LOWER SECTIONS: Education & About Me */}
          <div className="p-2 flex flex-col md:flex-row gap-6 justify-center w-full">
            <EducationExperienceSection />
            <AboutMe />
          </div>
        </div>

        {/* 4. SITE FOOT ELEMENTS */}
        <div className="flex flex-col items-center justify-center gap-5 md:gap-20 p-1 w-full">
          <Gallery />
          <Footer />
        </div>
      </BodyCard>
    </>
  );
}

export default App;