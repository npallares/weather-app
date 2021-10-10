import React from 'react'
import "./City.css"

const SetDataCities = (props) => {

    // Desestructuración de prop proveniente de MainCities.js 
    const{cityData} = props;

    // Seteo de URL para obtener el icono. 
    const iconUrl = `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`
    

    return (
        <div className="city-CardContainer">
            <img className="tempIcon"src={iconUrl} alt="Icon"/>
            <div className="city-Name"><span>{`${cityData.sys.country} -`}</span>{` ${cityData.name.toUpperCase()}`}</div>
            <div className="city-Temp">{` ${Math.round(cityData.main.temp - 273.15)}º`}</div>
            <div className="city-Row">Temperatura Mínima <span>{` ${Math.round(cityData.main.temp_min - 273.15)}º`}</span> </div>
            <div className="city-Row">Humedad <span>{`${cityData.main.humidity}%`}</span> </div>
            <div className="city-Row">Presión <span>{`${cityData.main.pressure} `}<small>hPa</small></span> </div>
            <div className="city-Row">Sensación Térmica <span>{` ${Math.round(cityData.main.feels_like - 273.15)}º`}</span> </div>
            <div className="city-Row">Temperatura Máxima <span>{` ${Math.round(cityData.main.temp_max - 273.15)}º`}</span> </div>
        </div>
    )
}

export default SetDataCities
