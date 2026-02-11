import { Home } from "lucide-react"
import Landing from "./components/Landing"
import './App.css'
import { LoginPage } from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RegisterPage } from "./components/RegisterPage"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
