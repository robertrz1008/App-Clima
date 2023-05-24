import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Form from './Form';

export default function WeatherPanel() {

  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState({})
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)

  let URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather?"
  let URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?"
  let LOCATION = "q="
  let API_ID = "&appid=bfd472e004268caf11454c01055885af&lang=es"

  async function weatherRequest(city,country) {
    setLoading(true)

    URL_WEATHER = URL_WEATHER + LOCATION + city + "," + country + API_ID
    // solicitando la url del clima
    await fetch(URL_WEATHER)
      .then(function (response) {
        if(!response.ok) throw {response}
        return response.json()
      }) 
      .then((weatherData) => {
        setLoading(false)
        setShow(true)
        console.log(weather)
        setWeather(weatherData)
      })
      .catch(error => {
          setLoading(false)
          console.log("fracasado")
          setShow(false)
          console.log(error);
      })

      URL_FORECAST = URL_FORECAST + LOCATION + city + "," + country + API_ID
      //solicitando la url del pronostico
      await fetch(URL_FORECAST)
        .then(function (response) {
          if(!response.ok) throw {response}
            return response.json()
        }) 
        .then((forecastrData) => {
            setForecast(forecastrData)
            setLoading(false)
            setShow(true)
        })
        .catch( error => {
            setLoading(false)
            setShow(false)
            console.log("pronostico fallado")
            console.log(error);
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
            show={show}
            />
    </React.Fragment>
  )
}
