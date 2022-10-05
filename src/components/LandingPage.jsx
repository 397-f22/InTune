import "./LandingPage.css";

const weatherTypes = ["", "sunny", "cloudy", "rainy", "snowy", "windy"];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const LandingPage = ({ weather, setWeather }) => (
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
);

export default LandingPage;
