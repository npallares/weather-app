import React,{useState, useEffect, useContext} from 'react'
import GeolocationContext from '../../context/GeolocationContext'
import { useFetch } from '../../hooks/useFetch'
import CardLocalWeather from './CardLocalWeather'
import "./LocalWeather.css"

const MainLocalWeather = () => {
    //Seteo de estados.
    const [localData,setLocalData]=useState(null)

    //Desestructuramos myPosition y GeolocationError del Context.
    const {myPosition, geolocationError} = useContext(GeolocationContext)

    //Definimos constantes, latitud , longitud y APIKEY para armar la URL del pedido.
    const latitude = myPosition.latitude || "", longitude = myPosition.longitude|| "", APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // Definimos URL para ser usada por el hook de useFetch.
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`

    // Desestructuramos los estados provenientes del useFetch.
    const { data, error, loading } = useFetch(url)
    
    
    useEffect(() => {
        if(data){
        setLocalData({data:data});
        }
        
    }, [data])
    
    //console.log(localData)
    
    // Comprobaciones para UI : ERROR GEOLOCALIZACION.
    if (geolocationError) return <h1>{geolocationError}</h1>

    // Comprobaciones para UI : PETICION FETCH PENDIENTE.
    if (loading) return <h1>LAODING....</h1>

    // Comprobaciones para UI : ERROR PETICION FETCH.
    if (error) return <h1>{`Error en la petición Fetch ${error.statusText}`}</h1>

    

    return (
        <div className="local-WeatherContainer">
            
            {localData && <CardLocalWeather data={localData.data}/>}
            
        </div>
    )
}

export default MainLocalWeather
