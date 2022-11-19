import React from "react";
import axios from "axios";
import { Triangle } from  'react-loader-spinner'



export default function Weather(props) {
   
    function handleResponse(response) {
        
        
        
    }
    let apiKey ="3a94f3778290bfeee61278505dbbe51d"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);

    return (
        <div class="container">
      <div class="weather-app">
      <form action="">
        <input 
        type="text" 
        placeholder="Search your city..." 
        autocomplete="off"
        autofocus="on"
        id="text-input"
        />
        
        <input type="submit" value="Search"  />
      </form>
      <br />
      <h1 id="city"></h1>

      <ul>
        <li id="todays-date">
          Thursday 22:00
        </li>
        <li id="description">
          Partly Cloudy
        </li>
      </ul>



      <div class="row">
<div class="col-6">
    <div class="d-flex weather-temperature">
<img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" 
alt="cloudy icon" 
class="weather-icon float-left" 
id="icon" />

<div class="float-left">
<span class="temperature" id="temperature">0</span>
<span class="units">°F </span>
</div>
</div>
</div>
<div class="col-6">
<ul>
  <li>Humidity: <span id="humidity"></span>%</li>
  <li>Wind: <span id="wind"></span>mph</li>
</ul>

</div>

<div class="weather-forecast" id="forecast">
  
</div>

      </div>
     
     

      <div class="container">
 
</div>
      </div>
      <h3>  <a href="https://github.com/albinaasllanaj/weather-react" target="blank">Open Source Code</a> by Albina Asllanaj </h3>
    </div>
    
    )


 
}