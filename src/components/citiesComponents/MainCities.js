import React,{useState,useEffect} from 'react'
import SetDataCities from './SetDataCities';

const MainCities = () => {

    const APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // State que pasara la data como prop.
    const [cityData, setCityData] = useState(null)
    
    // Funcion asíncrona para obtener la data y pasarla al estado, asociada al onChage del select. 
    const getCityData = async(e)=>{
        const newData = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${e.target.value}&appid=${APIKEY}`).then(res=>res.json()).then(data=>data)

        setCityData(newData)
    }
    

    return (
        <>
            <p>Elige una Ciudad</p>
            <select name="cityID" onChange={(e)=>getCityData(e)} defaultValue="Monaco">
                    <option value="2993458">Monaco</option>
                    <option value="6356055">Barcelona</option>
                    <option value="4167147">Orlando</option>
                    <option value="1850147">Tokyo</option>
                    <option value="3165523">Torino</option>
            </select>
            
            {cityData && <SetDataCities cityData={cityData} />}

            
        </>
    )
}

export default MainCities
