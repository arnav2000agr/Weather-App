import React from "react";
import styled from "styled-components";
import temp from "./icons/temp.svg";
import humidity from "./icons/humidity.svg";
import wind from "./icons/wind.svg";
import pressure from "./icons/pressure.svg";

export const WeatherInfoIcons = {
  sunset: temp,
  sunrise: temp,
  humidity: humidity,
  wind: wind,
  pressure: pressure,
};



const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 18px;
  & span {
    font-size: 26px;
  }
`;


const Location = styled.span`
  display: flex;
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;

  margin: 5px px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoIcon = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  margin: 15px;
  & span {
    font-size: 15px;
    text-transform: capitalize;
  }
`;

function WeatherInfoComponent(props) {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span><b>{name}</b></span>
      </InfoLabel>
    </InfoContainer>
  );
}

function WeatherComponent(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>

      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}.0°C`}</span> |{" "}
          <b>{`${weather?.weather[0].description}`}</b>
        </Condition>
        
      </WeatherCondition>
      <Location><b>{`${weather?.name},${weather?.sys?.country}`}</b></Location>
      <WeatherInfoLabel><b>Information About Weather</b></WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent 
        name={"wind"} 
        value={weather?.wind?.speed} 
        />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </WeatherInfoContainer>
      <button
        style={{
          padding: "5px",
          margin: "5px",
          textDecoration: "none",
          backgroundColor: "black",
          cursor:"pointer",
         borderRadius:"7px"
        }}
      >
        <a href="http://localhost:3000/"><b><i>Return</i></b></a>
      </button>
    </>
  );
}

export default WeatherComponent;
