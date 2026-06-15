import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/ProfileHeader";
import ProfileHeader from "./components/ProfileHeader"; 
import CustomBody from "./components/CustomBody";
import BodyCard from "./components/BodyCard";
import ProjectCard from "./components/ProjectCard";
import Recognition from "./components/Recognition";
import WorkExperienceSection from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/GallerySection";
import TestimonialSection from "./components/Testimonial";
import { Footer } from "./components/FooterSection";
import EducationExperienceSection from "./components/EducationSection";

function App() {
  return (
    <>
      <BodyCard>
        <ProfileHeader />
        <div className="flex flex-col justify-center w-90 md:w-full md:p-1 overflow-hidden">
          <div className="flex flex-col md:flex-row w-2xl md:w-fit gap-6 p-1">
            {/* Left Column: Projects and Recognition */}
            <div className="flex flex-col  gap-4 w-89 md:w-1/2 overflow-hidden">
              <WorkExperienceSection />
              <Recognition />
            </div>

            {/* Right Column: Work Experience */}
            <div className="w-1/2">
              <ProjectCard />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-centerp-1">
            <AboutMe />
            {/* no testimonials, disabled for now */}
            {/* <TestimonialSection /> */}
            <EducationExperienceSection></EducationExperienceSection>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:gap-20 p-1">
          <Gallery />
          <Footer />
        </div>
      </BodyCard>
    </>
  );
}

export default App;
