import React,{useState,useEffect} from 'react'
import "./LocalWeather.css"

const CardLocalWeather = (props) => {
    
    const [hour,setHour]=useState("23:03:10")
    
    const {data} = props;
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    const iconUrl2 = `http://openweathermap.org/img/wn/10d.png`
    console.log(data)

    /* useEffect(()=>{
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000);
        return() => clearInterval(interval)
    })
 */
    return (
        <div className="cardContainer">
            <img className="tempIcon"src={iconUrl} alt="Icon"/>
            <div className="citi"><span>{`${data.sys.country} -`}</span>{` ${data.name.toUpperCase()}`}</div>
            <div className="temp">{`${Math.floor(data.main.temp - 273.15)}º`}</div>
            <div className="columnsContainer">
                <div className="column">
                    <div className="row">Temperatura Mínima <span>{` ${Math.floor(data.main.temp_min - 273.15)}º`}</span> </div>                    
                    <div className="row">Humedad <span>{`${data.main.humidity}%`}</span> </div>
                    <div className="row">Presión <span>{`${data.main.pressure}`}<small>hPa</small></span> </div>
                </div>
                <div className="column">
                    <div className="row">Sensación Térmica <span>{` ${Math.floor(data.main.feels_like - 273.15)}º`}</span> </div>
                    <div className="row">Temperatura Máxima <span>{` ${Math.floor(data.main.temp_max - 273.15)}º`}</span> </div>
                    <div className="row">Hora Actual <span>{`${hour}`}</span> </div>
                </div>
                
            </div>

            
            
        </div>
    )
}

export default CardLocalWeather
