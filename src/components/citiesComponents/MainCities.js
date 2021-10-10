import React,{useState} from 'react'
import SetDataCities from './SetDataCities';
import "./City.css"

const MainCities = () => {

    const APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // State que pasara la data como prop.
    const [cityData, setCityData] = useState(null)
    
    // Funcion asíncrona para obtener la data y pasarla al estado, asociada al onChage del select. 
    const getCityData = async(e)=>{
        const newData = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${e.target.value}&appid=${APIKEY}`).then(res=>res.json()).then(data=>data)
        setCityData(newData)
    }
    
    //para el seteo de las ciudades segun id entrar a:
    //http://bulk.openweathermap.org/sample/  y descargar el archivo "city.list.json.gz"

    return (
        <>
            <div className="city-Title">Elige una Ciudad</div>
            <select className="city-Select"name="cityID" onChange={(e)=>getCityData(e)} placeholder="city" defaultValue={'Ciudades'}>
                    <option value="" hidden>Ciudades</option>
                    <option value="2993458">Monaco</option>
                    <option value="6356055">Barcelona</option>
                    <option value="4167147">Orlando</option>
                    <option value="1850147">Tokyo</option>
                    <option value="2193732">Auckland</option>
            </select>
            
            {cityData && <SetDataCities cityData={cityData} />}

            
        </>
    )
}

export default MainCities
