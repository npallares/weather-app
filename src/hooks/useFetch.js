import {useState, useEffect} from "react";

export const useFetch = (url) => {

    //seteo de estados para el fetch.
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {

      // "Abort Controller"  aborta la peticion en caso de estar caido el servidor.
      const abortController = new AbortController();

      // Signal emite el mensaje
      const signal = abortController.signal;
      
      //iniciamos petición Fetch 
      const fetchData = async () => {

        // al iniciar la peticion, seteamos a true el estado loading.
        setLoading(true);
  
        try {
          // inisiamos "res" que va a esperar la respuesta de la petición.  
          const res = await fetch(url, { signal });
            
          // si la respuesta es !OK , creamos objeto Error para un mejor manejo de este y setemos txt por default. 
          if (!res.ok) {
            let err = new Error("Error en la petición Fetch");
            err.status = res.status || "00";
            err.statusText = res.statusText || "Ocurrió un error";
            throw err;
          }
          
          const json = await res.json();
          
          // Si el signal aborted no dio + , seteamos "data" con el json y "error" en null. 
          if (!signal.aborted) {
            setData(json);
            setError(null);
            setLoading(false); 
          }

          // seteo de Error prov. del chatch al estado Error.
        } catch (error) {
          if (!signal.aborted) {
            setData(null);
            setError(error);
          }
          
          // finalmente, seteo de loading a false.
        } finally {
          if (!signal.aborted) {
            
          }
        }
        
      };
      
      
      fetchData();
      
      //console.log(data)
  
      return () => abortController.abort();
      
      
    }, [url]);
    
    // retornamos un OBJ con los estados de data, error y lading.
    return { data, error, loading };
  };