import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox" 

export default function weatherApp(){

    const [weatherInfo,setWeatherInfo]=useState(
        {
        City:"Latur",
        Weather: "clear sky",
        feelsLike: 29.46,
        humidity: 23,
        temp: 31.26,
        tempMax: 31.26,
        tempMin: 31.26,
         }
    )
let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo)
}
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by  Sumit</h2>
            <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
        </div>
    );
}