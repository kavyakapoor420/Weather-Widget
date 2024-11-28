import { useState } from "react"
import InfoBox from "./InfoBox"
// import SearchBox from "./SearchBox"
import SearchBox2 from './SearchBox2'

const WeatherApp=()=>{

     let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp:23 ,
        tempMin:"",
        tempMax:"",
        feels_like:"",
        humidity:"",
        weather:""
     })

     let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
     }

    return (
        <>
             <div className="" style={{textAlign:'center'}}>
                  <h2>Weather App</h2>
                  {/* <SearchBox updateInfo={updateInfo}/> */}
                  <SearchBox2 updateInfo={updateInfo}/>
                  <InfoBox info={weatherInfo}/>
             </div>
        </>
    )
}

export default WeatherApp