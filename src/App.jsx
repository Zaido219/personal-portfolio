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

function App() {
  const [count, setCount] = useState(0)

    return (
      <>
        <BodyCard>
          <ProfileHeader/>
          <div className='flex justify-center w-full p-1 bg-orange-300'>
            <div className=''>
              <ProjectCard/>
              <Recognition/>
            </div>
            <WorkExperienceSection/>
          </div>
          <AboutMe/>
          <Gallery/>
        </BodyCard>
      </>
    )
}

export default App
