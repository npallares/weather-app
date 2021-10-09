import React,{useState, useEffect, useContext} from 'react'
import GeolocationContext from '../../context/GeolocationContext'
import { useFetch } from '../../hooks/useFetch'
import "./MainFiveDays.css"


const MainFiveDays= () => {

    const [localData,setLocalData]=useState([])

    //Desestructuramos myPosition y GeolocationError del Context.
    const {myPosition, geolocationError} = useContext(GeolocationContext)

    //Definimos constantes, latitud , longitud y APIKEY para armar la URL del pedido.
    const latitude = myPosition.latitude || "", longitude = myPosition.longitude|| "", APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // Definimos URL para ser usada por el hook de useFetch.
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`

    // Desestructuramos los estados provenientes del useFetch.
    const { data, error, loading } = useFetch(url)

    //console.log(data,error,loading)
    
    useEffect(() => {
        if(data)setLocalData(data);
        
    }, [data])
    
    //console.log(localData)

    if (geolocationError) return <h1>{geolocationError}</h1>
    
    if (loading) return <h1>LAODING....</h1>

    if (error) return <h1>{`Error en la petición Fetch ${error.statusText}`}</h1>

    

    return (
        <div className="fiveDaysContainer">
            <h2>Main Five Days</h2>
        </div>
    )
}

export default MainFiveDays