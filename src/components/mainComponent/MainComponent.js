import React from 'react'
import MainCities from '../citiesComponents/MainCities';
import MainLocalWeather from '../localWeatherComponents/MainLocalWeather';
import MainFiveDays from '../fiveDaysComponents/MainFiveDays';
import '../../App.css';

const MainComponent = () => {
    return (
        <>
            <div className="localContainer">
            <MainLocalWeather/>
            <MainFiveDays/>
            </div>
            <div className="citiesContainer">
            <MainCities/>
            </div>
        </>
    )
}

export default MainComponent
