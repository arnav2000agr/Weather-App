import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import React, { useState } from "react";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from "axios";

const API_KEY=process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  align-items: center;
  ${'' /* box-shadow: 0 3px 6px 0 #5555; */}
  border-radius: 4px;
  width: 400px;
  ${'' /* height:480px; */}
  background:golden;
  opacity:0.8;
  font-family: Monserrat;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
   `);

    console.log(response.data);

    updateWeather(response.data);
  };

  return (
    <Container class="container">
      <h1 id="Label"><b>Check Weather</b></h1>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
