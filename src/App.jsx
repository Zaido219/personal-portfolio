import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ProfileHeader'
import ProfileHeader from './components/ProfileHeader'

function App() {
  const [count, setCount] = useState(0)

    return (
      <>
        <ProfileHeader />
      </>
    )
}

export default App
