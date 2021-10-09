import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const FetchCity = (prop) => {

    const{url}=prop

    const { data, error, loading } = useFetch(url)
    
    console.log(url)
    console.log(data) 



    return (
        <div>
            <h5>hola</h5>
        </div>
    )
}

export default FetchCity
