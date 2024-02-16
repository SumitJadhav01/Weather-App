import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [City, setCity] = useState("");
  let [error, setError] = useState(false);
  let URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_key = "3228bb318777b275bdc6f844f3a2bb8c";

  let getWeatherInfo = async () => {

    try{
      let responce = await fetch(
      `${URL}?q=${City}&appid=${API_key}&units=metric`);
      let jsonReponce = await responce.json();
      console.log(jsonReponce);
      let result = {
        City:City,
        temp: jsonReponce.main.temp,
        tempMin: jsonReponce.main.temp_min,
        tempMax: jsonReponce.main.temp_max,
        humidity: jsonReponce.main.humidity,
        feelsLike: jsonReponce.main.feels_like,
        Weather: jsonReponce.weather[0].description,
      };
      console.log(result);
      return result;
  
    }catch(err){
      throw err;
    }
  };

  let handelChange = (event) => {
    setCity(event.target.value);
  };

  let handelSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(City);
      setCity("");
     let newInfo= await getWeatherInfo();
     updateInfo(newInfo);
  
    }catch(err){
      setError(true)
}
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handelSubmit}>
   
        <TextField style={{color:"red"}}
          label="City Name"
          variant="filled"
          required
          color="warning"
          placeholder="Search Location"
          multiline
          sx={{ m: 1, mt: 3, width: '50ch' }}
          id="City"
          value={City}
          onChange={handelChange}
        />

        <br />
        <br />

        <Button
          variant="outlined"
          type="Submit"
          endIcon={<SendIcon />}
          color="warning"
        >
          SEARCH
        </Button>
        {error && <P>No such place exists!</P>}
      </form>
    </div>
  );
}
