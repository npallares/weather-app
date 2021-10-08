import {createContext, useState, useEffect} from 'react'

const GeolocationContext = createContext();

const GeolocationProvider = ({children}) => {

    //Definimos Estados de posicion y de error de lectura.

    const [myPosition, setMyPosition] = useState({});
    const [geolocationError, setGeolocationError] = useState(false);

    // Seteo En caso de EXITO: Definimos un objeto con la longitud y latitud del dispositivo
    const success =(position)=>{
        setMyPosition({
            latitude : position.coords.latitude,
            longitude: position.coords.longitude
        })
        setGeolocationError(false)
    }

    // Seteo En caso de ERROR: Definimos un mensaje de error.
    const denied = (err)=>{
        setGeolocationError(`Error Code: ${err.code}, Msg: ${err.message}. Por favor habilite la Geolocalización para continuar.`)
    }


    // Seteo de opciones para la lectura del navigator.
    const options ={

        // por defecto viene false, mejora la lectura del dispositivo.
        eneableHightAccuracy: true,

        // Tiempo estimado de lectura
        timeout: 5000,

        // maximumAge Evita que no se guarde en cache la lectura.
         maximumAge: 0,

    }

    useEffect(()=>{
        
        // Ejecución de lectura lectura.
        navigator.geolocation.getCurrentPosition(success, denied, options)
        
        
    },[])
    

    // console.log(myPosition)
    // console.log(geolocationError)

    const data={myPosition, geolocationError}

    return <GeolocationContext.Provider value={data}>{children}</GeolocationContext.Provider>
}

export {GeolocationProvider}
export default GeolocationContext