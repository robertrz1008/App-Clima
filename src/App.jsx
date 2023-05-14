import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
