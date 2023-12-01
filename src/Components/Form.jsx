import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import "../Css/Form.css"

export default function Form({ weatherRequest, weather, forecast }) {

    const [coutry, setCountry] = useState("")
    const [city, setCity] = useState("")

    const submit = (e) => {
        e.preventDefault()
        weatherRequest(city, coutry)
        setCountry("")
        setCity("")
        console.log(weather)
        console.log("pronostico")
        console.log(forecast)
    }


    return (
        <form onSubmit={submit}>
            <div className=" mb-3 form-content">
                <input className="form-control form-control-lg mt-2" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Ingrese la ciudad" aria-label=".form-control-lg example"/>
                <center><button style={{margin: "10px"}} type="button " className="btn btn-success">buscar</button></center>
            </div>
        </form>
    )
}
