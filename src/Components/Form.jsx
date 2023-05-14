import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { WeatherContex } from '../Context/WeatherContex'
import "../Css/Form.css"

export default function Form() {

    const { weatherRequest, weather } = useContext(WeatherContex)

    const [coutry, setCountry] = useState("")
    const [city, setCity] = useState("")

    const submit = (e) => {
        e.preventDefault()
        weatherRequest(city, coutry)
        setCountry("")
        setCity("")
        console.log(weather)
    }


    return (
        <form onSubmit={submit}>
            <div className=" mb-3 form-content">
                <input className="form-control form-control-lg mt-2" value={coutry} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Ingrese el pais" aria-label=".form-control-lg example" /> 
                <input className="form-control form-control-lg mt-2" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Ingrese la ciudad" aria-label=".form-control-lg example"/>
                <center><button type="button " className="btn btn-outline-success">Success</button></center>
            </div>
        </form>
    )
}
