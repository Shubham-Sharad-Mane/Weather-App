import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo]=useState({ // create the state variable for the weather info and now we just pass the info 
        city:"Delhi",
        feellike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    })// now we pass this information into InfoBox component as a promp which desplay that information

    let updateInfo=(newinfo)=>{  // create the new fumction which takes the information from the search box and set that information to the weatherinfo
        setWeatherInfo(newinfo);  // and pass that information to the searchbox as an promp 
    } 
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Shubham </h1>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}