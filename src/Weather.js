import React from "react";
import axios from "axios";
import { Triangle } from  'react-loader-spinner'



export default function Weather(props) {
   
    function handleResponse(response) {
        
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)} C `)
        
    }
    let apiKey ="3a94f3778290bfeee61278505dbbe51d"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);

    return <Triangle
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
}