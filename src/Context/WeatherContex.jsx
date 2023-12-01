import React from 'react'
import { createContext } from 'react'

export const WeatherContex = createContext();

export default function WeatherContexProvider(prop) {

  return (
    <WeatherContex.Provider value={{
    }}>
      {prop.children}
    </WeatherContex.Provider>
  )
}
