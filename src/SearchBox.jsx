import Button from '@mui/material/Button'; // import the button from material ui
import TextField from '@mui/material/TextField'; // import the textfield from material ui
import "./SearchBox.css"; // import the css for searchbox
import { useState } from 'react'; //import the useState 
export default function SearchBox({updateInfo}){ 
    let [city,setCity]=useState("");  // cerate the state variable for the form to crete the controll component or change the default behaivour
    let [error,setError]=useState(false); // this sate variable is created because if sum errors occurs then what to do (that error comes as the wrong city name or if that city info is not present in our api)
    const API_URL=import.meta.env.VITE_API_URL; // api url of the weather api 
    const API_KEY=import.meta.env.VITE_API_KEY;

    // we create the function for weather information 
    // pass the updateInfo prompt to the function
    let getWeatherInfo=async ()=>{  // but using the above api the data is not in the matrix so for this reason we add then &units=metric
       try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  // this getWeatherinfo function gets the all information of the weather from feaathing the api of weather application for this we need to give the query as the city name and the api key for this we use the `` this type of qutoes
       let jsonresponse =await response.json(); // to conver that information into the json formate
       // console.log(jsonresponse);
       let result={ //now we create the object for the store the jsonresponse all data in the result object
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelLikes:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description,
       }
       console.log(result);
       return result; // that getWeatherInfo function return the result
    }catch(err){ // catch that error and throw
        throw err;
    }
    }

        
    let handleChange=(event)=>{   
        setCity(event.target.value);
    }
    let handleSubmit= async (event)=>{ 
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo(); // that information is comes from the function which takes the information from the search so use the await for this make that function as an async function
        // that info give as the information so tha information we pass into the updateInfo
        updateInfo(newinfo);
        }catch(err){ // catch that error and set the error  as a true because in first the useState we set that error as false
            setError(true)
        }
    }
    return(
    <div className="SearchBox">
       
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
       
        { !error && <p></p> || error && <p>No Such Place Exists ! </p>  }

        </form>
    </div>
    );
}