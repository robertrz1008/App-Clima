import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WeatherContexProvider from './Context/WeatherContex.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContexProvider>
      <App />
    </WeatherContexProvider>
  </React.StrictMode>,
)
