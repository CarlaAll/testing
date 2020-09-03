import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.main.name} is currently ${response.data.main.temp}°C.`
    );
  }

  const apiKey = "0b04f7882b2a886e7942aa9e854e4071";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello from Weather App</h2>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
