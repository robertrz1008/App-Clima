import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<h1>Ruta descolocida</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
