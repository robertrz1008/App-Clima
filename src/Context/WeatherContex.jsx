import React, { createRef } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react'

export const WeatherContex = createContext();

export default function WeatherContexProvider(prop) {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true)

  let URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather?"
  let URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?"
  let LOCATION = "q="
  let API_ID = "&appid=bfd472e004268caf11454c01055885af&lang=es"


  async function weatherRequest(city,country) {

    setLoading(true)

    URL_WEATHER = URL_WEATHER + LOCATION + city + "," + country + API_ID
    // solicitando la url del clima
    await axios.get(URL_WEATHER)
      .then(function (response) {
        if(!response.ok) throw {response}
        return response.json()
      }) 
      .then((weatherData) => {
        setWeather(weatherData)
        setShow(true)
        setLoading(false)
      })
      .catch(function (error) {
          setLoading(false)
          setShow(true)
          console.log(error);
      })

      URL_FORECAST = URL_FORECAST + LOCATION + city + "," + country + API_ID
      //solicitando la url del pronostico
      await axios.get(URL_FORECAST)
        .then(function (response) {
          if(!response.ok) throw {response}
            return response.json()
        }) 
        .then((forecastrData) => {
            setForecast(forecastrData)
            setLoading(false)
            setShow(true)
        })
        .catch(function (error) {
            setLoading(false)
            setShow(false)
            console.log(error);
        })
  }


  return (
    <WeatherContex.Provider value={{
      weatherRequest,
      weather,
      loading,
      forecast,
      show,
    }}>
      {prop.children}
    </WeatherContex.Provider>
  )
}
