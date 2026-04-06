import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ProfileHeader'
import ProfileHeader from './components/ProfileHeader'
import CustomBody from './components/CustomBody'
import BodyCard from './components/BodyCard'
import ProjectCard from './components/ProjectCard'
import Recognition from './components/Recognition'
import WorkExperienceSection from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Gallery from './components/GallerySection'
import TestimonialSection from './components/Testimonial'
import { Footer } from './components/FooterSection'

function App() {
    return (
      <>
        <BodyCard>
          <ProfileHeader />
          <div className="flex flex-col justify-center w-full p-1 bg-red-300">
            <div className="">
              <ProjectCard />
              <Recognition />
            </div>
            <WorkExperienceSection />
          <div className="flex bg-violet-300 justify-center w-full p-1">
            <AboutMe />
            <TestimonialSection />
          </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-20 p-1'>
            <Gallery />
            <Footer />
          </div>
        </BodyCard>
      </>
    );
}

export default App
