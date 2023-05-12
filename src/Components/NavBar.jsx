import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/NavBar.css"

export default function NavBar() {

    return (
        <div>
        <nav>
            <h1>App Clima</h1>
            <div className='rutas'>
              <NavLink className='ruta' to="/home">Clima</NavLink>
              <NavLink className='ruta' to="/login">Iniciar Session</NavLink>
            </div>
        </nav>
    </div>
    )
}
