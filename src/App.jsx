
import SentimentAnalysis from './components/SentimentAnalysis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'

import Registro from './components/Registro'

function App() {
  
  const token = localStorage.getItem('token')
console.log(token)
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/"  element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/genios"  element={<SentimentAnalysis />} />
        </Routes>
  
    </Router>

     
    </>
  )
}

export default App
