import "./App.css";
import axios from "axios";

function App() {
  return (
    <div>
      <h1>Weather</h1>
      <input type="text" id="cityInput" placeholder="Enter city name" />
      <button>Get Weather</button>
      <div id="weatherData"></div>
    </div>
  );
}

export default App;
