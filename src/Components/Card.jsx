import React from 'react'
import Spinner from './Spinner'
import "../Css/Card.css"

export default function Card({weather,forecast,loading,show}) {

  const weatherObj = {...weather}
  var today = new Date()
  var day = today.getDate()
  var month = today.getMonth() + 1;
  var year = today.getFullYear()
  var date = day+"/"+month+"/"+year

  let url = "";
  let iconUrl = "";
  let foreDate;
  let foreDate2;
  let foreDate3;


  if(loading){
    return <center><Spinner/></center>
  }
  console.log(show)

  if(show){
    url = "http://openweathermap.org/img/w/"
    iconUrl = url + weatherObj.weather[0].icon + ".png"

    foreDate = forecast.list[9].dt_txt.substring(8, 10) + "/" + forecast.list[9].dt_txt.substring(5, 7) + "/" +  forecast.list[9].dt_txt.substring(0, 4) + "  " + forecast.list[9].dt_txt.substring(11, 13) + "hs";
    foreDate2 = forecast.list[15].dt_txt.substring(8, 10) + "/" + forecast.list[15].dt_txt.substring(5, 7) + "/" +  forecast.list[15].dt_txt.substring(0, 4) + "  " + forecast.list[15].dt_txt.substring(11, 13) + "hs";
    foreDate3 = forecast.list[25].dt_txt.substring(8, 10) + "/" + forecast.list[25].dt_txt.substring(5, 7) + "/" +  forecast.list[25].dt_txt.substring(0, 4) + "  " + forecast.list[25].dt_txt.substring(11, 13) + "hs";

  }
 

  return (
    <div>
        {
          show === true ? (


              <div className='card-cont '>
                  <div className='card-sections'>
                      <section className='card-section-1 '>
                            <h1 className='fs-7 weather-totle'>{weather.name.toUpperCase()}</h1>
                            <h5>{date}</h5>
                            <div className='d-flex mt-2'>
                                <div className='card-cont-icon '>
                                  <img src={iconUrl} alt="icon" />
                                </div>
                                <h1 className='fs-10'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                            </div>
                    </section>
                    <section className='card-section-2'>
                            <h6>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h6>
                            <h6>Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h6>
                            <h6>Sensacion temica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h6>
                            <h6>Humedad: { weather.main.humidity}%</h6>
                    </section>
                  </div>


                  <div className='linea'></div>


                  <div className='card-section2 w-100 d-flex justify-content-around mt-3'>
                    <div className='card-forecast'>
                        <h6>{foreDate}</h6>
                        <div className='fore-cont-img'>
                            <img  src={url + forecast.list[9].weather[0].icon + ".png"} alt="icon" /> 
                        </div>
                        <h4>{(forecast.list[9].main.temp - 273.15).toFixed(1)}°C</h4>
                    </div>
                    <div className='card-forecast'>
                        <h6>{foreDate2}</h6>
                        <div className='fore-cont-img'>
                            <img  src={url + forecast.list[12].weather[0].icon + ".png"} alt="icon" /> 
                        </div>
                        <h4>{(forecast.list[15].main.temp - 273.15).toFixed(1)}°C</h4>
                    </div>
                    <div className='card-forecast'>
                        <h6>{foreDate3}</h6>
                        <div className='fore-cont-img'>
                            <img  src={url + forecast.list[25].weather[0].icon + ".png"} alt="icon" /> 
                        </div>
                        <h4>{(forecast.list[25].main.temp - 273.15).toFixed(1)}°C</h4>
                    </div>
                  </div>


              </div>
          ): (
            <h1 className='text-center link-light'>no encontrado</h1>
          )
        }
       
    </div>
  )
  }
