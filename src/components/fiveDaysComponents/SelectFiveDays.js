import React from 'react'
import CardFiveDays from './CardFiveDays';
import "./FiveDays.css"

const SelectFiveDays = (props) => {

    // Desetructuración de props.
    const {data} = props;

    
    // Array que filtra de las 40 lecturas, aquellas que en su fecha sean distintas, y las pushea al acumulador.
    const fiveDays =  data.list.reduce((acc, el ) => {
        if(!acc.find(dato => dato.dt_txt.slice(8,10) === el.dt_txt.slice(8,10))){ acc.push(el)}
        return acc
    },[])

    // shift elimina el primer elemento del array, ya que este primer elemento pertenece al dai actual y se muestra en el componente principal.
    fiveDays.shift()
    
    return (
        <div className="fiveDays-CardsContainer">
            {fiveDays.map(el=><CardFiveDays data={el} key={el.dt}/>)}
        </div>
    )
}

export default SelectFiveDays
