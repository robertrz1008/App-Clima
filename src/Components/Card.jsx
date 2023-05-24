import React from 'react'
import Spinner from './Spinner'
import "../Css/Card.css"

export default function Card({weather, loading,show}) {

  const weatherObj = {...weather}
  var today = new Date()
  var day = today.getDate()
  var month = today.getMonth() + 1;
  var year = today.getFullYear()
  var date = day+"/"+month+"/"+year

  let url = "";
  let iconUrl = "";
  let a = ""

  if(loading){
    return <Spinner/>
  }
  console.log(show)

  if(show){
    url = "http://openweathermap.org/img/w/"
    iconUrl = url + weatherObj.weather[0].icon + ".png"
  }

  return (
    <div>
        {
          show === true ? (
              <div className='card-cont bg-primary d-flex '>
                  <div className='weather-cont'>
                      <h1>{weather.name}</h1>
                      <h5>{date}</h5>
                      <h4>
                          <img className='card-icon' src={iconUrl} alt="icon" /> 
                          {a}
                      </h4>
                      <h1>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                  </div>
                  <div className=''>

                  </div>
              </div>
          ): (
            <h1>no encontrado</h1>
          )
        }
    </div>
  )
  }
