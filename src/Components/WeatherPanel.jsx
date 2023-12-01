import React from 'react'
import { useState } from 'react'
import Card from './Card';
import Form from './Form';

export default function WeatherPanel() {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)

  let URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather?"
  let URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?"
  let LOCATION = "q="
  let API_ID = "&appid=bfd472e004268caf11454c01055885af&lang=es"

  async function weatherRequest(city,country) {
    setLoading(true)
    setForecast([])
    setWeather([])

    URL_WEATHER = URL_WEATHER + LOCATION + city + "," + country + API_ID
    // solicitando la url del clima
    await fetch(URL_WEATHER)
      .then(function (response) {
        if(!response.ok) throw {response}
        return response.json()
      }) 
      .then((weatherData) => {
        setWeather(weatherData)
      })
      .catch(error => {
          setLoading(false)
          setShow(false)
          setError(true)
      })

      URL_FORECAST = URL_FORECAST + LOCATION + city + API_ID
      // //solicitando la url del pronostico
      await fetch(URL_FORECAST)
        .then(function (response) {
          if(!response.ok) throw {response}
            return response.json()
        }) 
        .then((forecastrData) => {
            setForecast(forecastrData)
            setLoading(false)
            setShow(true)
            setError(false)
        })
        .catch( error => {
          console.log("pronostico y ano funciona")
            setLoading(false)
            setShow(false)
            setError(true)
        })
  }
  

  return (
    <React.Fragment>
        <Form
            weatherRequest={weatherRequest}
            weather={weather}
            forecast={forecast}
            />
        <Card 
            weather={weather}
            loading={loading}
            forecast={forecast}
            show={show}
            error={error}
            />
    </React.Fragment>
  )
}
