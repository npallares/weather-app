import React from 'react'

const SetDataCities = (props) => {

    // Desestructuración de prop proveniente de MainCities.js 
    const{cityData} = props;

    return (
        <div>
            <h4>{cityData.id}</h4>
        </div>
    )
}

export default SetDataCities
