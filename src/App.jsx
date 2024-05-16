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

function App() {
  return (
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
          <p>temp min</p>
          <p>temp max</p>
        </div>
      </div>
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
}

export default App;
