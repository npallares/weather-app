import React from 'react'
import CardFiveDays from './CardFiveDays';
import "./FiveDays.css"

const SelectFiveDays = (props) => {

    // Desetructuración de props.
    const {data} = props;

    // Selección manual de temperatura promedio diaria.
    const selectMoment = [[data.list[0+1]],[data.list[7+1]],[data.list[16+1]],[data.list[24+1]],[data.list[32+1]]]
    
    // Mapeo de información proveniente de selectMomoent para el armado de la UI.
    const listDays = selectMoment.map(el=>el[0])
    
    //console.log(listDays)
    return (
        <div className="fiveDays-CardsContainer">
            {listDays.map(el=><CardFiveDays data={el} key={el.dt}/>)}
        </div>
    )
}

export default SelectFiveDays
