import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import { HashRouter  as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home'
import Experience from './component/pages/Experience'
import Project from './component/pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/experience' exact Component={Experience} />
          <Route path='/project/:id' exact Component={Project} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
