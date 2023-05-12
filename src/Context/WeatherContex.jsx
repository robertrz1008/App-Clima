import React, { createRef } from 'react'
import { createContext } from 'react'

export const WeatherContex = createContext();

export default function WeatherContexProvider(prop) {
  return (
    <WeatherContex.Provider>
        {prop.children}
    </WeatherContex.Provider>
  )
}
