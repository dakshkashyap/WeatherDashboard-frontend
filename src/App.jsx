import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import cloud1 from "./images/cloud1.svg";
import cloud2 from "./images/cloud2.svg";
import cloud3 from "./images/cloud3.svg";
import cloud4 from "./images/cloud4.svg";
import cloud5 from "./images/cloud5.svg";
import cloud6 from "./images/cloud6.svg";
/* ------------------------------ TODO API call ----------------------------- */
/*
 * 1. async function that gets data from our express server
 * 2. Populate that data inside out weatherData div
 */

/* ------------------------------ TODO Styling ------------------------------ */
/*
 * 1. make bg color
 * 2. change bg based on weather type (ideally)
 * 3. style card
 * 4. add some weather animations
 */

const App = () => {
  // State hooks
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  // Function to format the date
  const toDateFunction = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const date = `${weekDays[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  // Function to handle search
  const search = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setWeather({ ...weather, loading: true });

      const url = "http://localhost:8080";

      try {
        const response = await axios.get(url, {
          params: {
            city: input,
          },
        });
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("error", error);
      }
      setInput("");
    }
  };

  console.log("updated Weather by City:", weather.data);

  return (
    <div className="App">
      <h1 className="app-name">Weather App</h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Enter City Name.."
          name="query"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {/* Display error message if city not found */}
      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message" style={{ fontSize: "20px" }}>
            City not found
          </span>
        </>
      )}

      {/* Display weather data if available */}

      {weather.data.name && (
        <div className="weather weather--sunny">
          <h1>Weather</h1>
          <input type="text" id="cityInput" placeholder="Enter city name" />
          <button>Get Weather</button>
          <div id="weatherData">
            <h2>Vancouver</h2>
            <img src="#" alt="icon" />
            <h3>Weather type (Cloudy)</h3>
            <h4>temp</h4>
            <div>
              <div className="city-name">
                <h2>
                  {weather.data.name}, <span>{weather.data.country}</span>
                </h2>
              </div>
              <div className="date">
                <span>{toDateFunction()}</span>
              </div>
              <div className="icon-temp">
                <img
                  className=""
                  src={weather.data.icon_url}
                  alt={weather.data.weather_desc}
                />
                {Math.round(weather.data.tempc)}
                <sup className="deg">°C</sup>
              </div>
              <div className="des-wind">
                <p>{weather.data.weather_desc}</p>
                <p>Wind Speed: {weather.data.wind_speed}m/s</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="clouds">
        <div className="clouds-top">
          <img src={cloud1} alt="cloud1" />
        </div>
        <div className="clouds-btm">
          <img className="clouds-btm__cloud" src={cloud4} alt="cloud1" />
          <div className="clouds-btm__wrap">
            <img src={cloud3} alt="cloud3" />
            <img src={cloud6} alt="cloud4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
