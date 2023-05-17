import React from 'react'
import { useContext } from 'react'
import { WeatherContex } from '../Context/WeatherContex'
import Spinner from './Spinner'

export default function Card() {

  const {weather, loading,show,} = useContext(WeatherContex)
  if(loading){
    return <Spinner/>
  }
  return (
    <div>
      {
        show? (
          <h1>encontrado</h1>
        ):(
          <h1>no encontrado</h1>
        )
      }
    </div>
  )
  }
