import { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route Component={Home} path='/'/>
      </Routes>
    </Router>
  )
}

export default App
