import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

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
      )}
    </div>
  );
};

export default App;
