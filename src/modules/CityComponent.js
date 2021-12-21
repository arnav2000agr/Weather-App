import React from "react";
import styled from "styled-components";

import day from "./icons/day.svg";
const WeatherLogo = styled.img`
  width: 180px;
  height: 180px;
  margin: 40px auto;
  opacity: 0.7;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 24.5px;
  font-weight: bold;
  margin: 10px auto;
  opacity:1.0;
`;

const SearchBox = styled.span`
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 18px;
  margin: 10px auto;
  & input {
    padding:7px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
    opacity:0.6;
    ::placeholder { 
  color: black;
  opacity: 0.3;
}
  }
  

  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color:black;
    filter:drop-shadow(30px );
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src={day} />
      <ChooseCityLabel><b>The Weather In Your City</b></ChooseCityLabel>
      <SearchBox >
        <input
          placeholder="Enter City"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type={"submit"}  onClick={fetchWeather}>Submit</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
