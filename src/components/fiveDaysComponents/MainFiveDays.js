import React,{useState, useEffect, useContext} from 'react'
import GeolocationContext from '../../context/GeolocationContext'
import { useFetch } from '../../hooks/useFetch'
import SelectFiveDays from './SelectFiveDays'
import "./FiveDays.css"


const MainFiveDays= () => {

    const [localData,setLocalData]=useState(null)

    //Desestructuramos myPosition y GeolocationError del Context.
    const {myPosition} = useContext(GeolocationContext)

    //Definimos constantes, latitud , longitud y APIKEY para armar la URL del pedido.
    const latitude = myPosition.latitude || "", longitude = myPosition.longitude|| "", APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // Definimos URL para ser usada por el hook de useFetch.
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`

    // Desestructuramos los estados provenientes del useFetch.
    const { data } = useFetch(url)

    //console.log(data,error,loading)
    
    useEffect(() => {
        if(data){
        setLocalData({data:data});
        }
    }, [data])

    return (
        <div className="fiveDays-Container">
            {localData && <SelectFiveDays data={localData.data}/>}
        </div>
    )
}

export default MainFiveDays
