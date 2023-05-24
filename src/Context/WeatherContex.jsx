import React, { createRef } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
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
