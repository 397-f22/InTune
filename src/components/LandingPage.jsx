import { Link } from 'react-router-dom';
import "./LandingPage.css";

const weatherTypes = ["", "sunny", "cloudy", "rainy", "snowy"];
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const handleSubmit = (event, weather) => {
  if (weather === "Error") {
    event.preventDefault();
    alert("Please select a weather type.");
    return;
  };
}

const LandingPage = ({ weather, setWeather }) => (
  <div className="landing-page">
    <div className="bottom-section">
      <div className="weather-select-dropdown">
        <label className="weather-select-label">Select Weather:</label>
        <select className="select-bar" defaultValue={weather} onChange={(e) => setWeather(e.target.value)}>
          {
            weatherTypes.map((weatherType, id) => (
              <option key={id} value={weatherType}>{capitalize(weatherType)}</option>
            ))
          }
        </select>
      </div>
      <Link to="/songs" params={{ weather: weather, setWeather: setWeather }} onClick={(event) => handleSubmit(event, weather)}>
        <input className="weather-submit-button" type="button" value="View Songs!" />
      </Link>
    </div>
  </div>
);

export default LandingPage;

