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

function App() {
  return (
    <>
      <BodyCard>
        <ProfileHeader />
        <div className="flex flex-col justify-center w-full p-1">
          <div className="flex flex-row gap-6 p-4">
            {/* Left Column: Projects and Recognition */}
            <div className="flex flex-col gap-4 w-1/2">
              <ProjectCard />
              <Recognition />
            </div>

            {/* Right Column: Work Experience */}
            <div className="w-1/2">
              <WorkExperienceSection />
            </div>
          </div>
          <div className="flex justify-centerp-1">
            <AboutMe />
            <TestimonialSection />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 p-1">
          <Gallery />
          <Footer />
        </div>
      </BodyCard>
    </>
  );
}

export default App;
