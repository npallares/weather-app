import React from 'react'
import "./LocalWeather.css"


const CardLocalWeather = (props) => {
    
    // Desetructuración de props.
    const {data} = props;

    // Seteo de URL para importar el icono de la API.
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
    //console.log(data)
    return (
        <div className="local-cardContainer">
            <img className="local-tempIcon"src={iconUrl} alt="Icon"/>
            <div className="local-city"><span>{`${data.sys.country} -`}</span>{` ${data.name.toUpperCase()}`}</div>
            <div className="local-temp">{`${Math.round(data.main.temp - 273.15)}º`}</div>
            <div className="local-columnsContainer">
                <div className="local-column">
                    <div className="local-row">Temperatura<br/> Mínima <span>{` ${Math.round(data.main.temp_min - 273.15)}º`}</span> </div>                    
                    <div className="local-row">Humedad <span>{`${data.main.humidity}%`}</span> </div>
                    <div className="local-row">Presión <span>{`${data.main.pressure}`}<small>hPa</small></span> </div>
                </div>
                <div className="local-column">
                    <div className="local-row">Temperatura Máxima <span>{` ${Math.round(data.main.temp_max - 273.15)}º`}</span> </div>
                    <div className="local-row">Sensación Térmica <span>{` ${Math.round(data.main.feels_like - 273.15)}º`}</span> </div>
                    <div className="local-row">Hora de lectura <span>{new Date().toLocaleTimeString()}</span> </div>
                </div>     
            </div>   
        </div>
    )
}

export default CardLocalWeather
