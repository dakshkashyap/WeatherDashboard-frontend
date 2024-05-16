import "./App.scss";
import axios from "axios";
import cloud1 from "./images/cloud1.svg";
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

function App() {
  return (
    <div className="weather weather--sunny">
      <img src={cloud1} alt="cloud" />
      <h1>Weather</h1>
      <input type="text" id="cityInput" placeholder="Enter city name" />
      <button>Get Weather</button>
      <div id="weatherData">
        <h2>Vancouver</h2>
        <img src="#" alt="icon" />
        <h3>Weather type (Cloudy)</h3>
        <h4>temp</h4>
        <div>
          <p>temp min</p>
          <p>temp max</p>
        </div>
      </div>
    </div>
  );
}

export default App;
