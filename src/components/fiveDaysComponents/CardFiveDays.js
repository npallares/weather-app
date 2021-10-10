import React from 'react'
import { useGetDay } from '../../hooks/useGetDay';

const CardFiveDays = (props) => {
    
    // Desetructuración de props.
    const{data}=props;

    // Uso del Hook useGetDAy para saber que dia de la semana cae la fecha que proviene de la UI.
    const dayOfWeek = useGetDay(data.dt_txt)

    // Extracción numerica del dia.
    const date = data.dt_txt.slice(8,10)

    // Seteo de URL para importar el icono de la API.
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
    //console.log(data)
    return (
        <div className="fiveDays-CardDetail">
           <span className="fiveDays-circle">
            <img className="fiveDays-Icon"src={iconUrl} alt="icon"/>
           </span>
           <div className="fiveDays-Temp">{` ${Math.round(data.main.temp - 273.15)}º`}</div>
           <div className="fiveDays-DayOfWeek">{dayOfWeek}{` `}<span>{date}</span></div>
           <div className="fiveDays-Average">TEMP. PROMEDIO</div>
        </div>
    )
}

export default CardFiveDays
