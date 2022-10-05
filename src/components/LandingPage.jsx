import "./LandingPage.css";

const weatherTypes = ["sunny", "cloudy", "rainy", "snowy", "windy"];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const LandingPage = () => (
  <div className="weather-select-dropdown">
    <label className="weather-select-label">Select Weather:</label>
    <select className="select-bar">
      {
        weatherTypes.map((weather) => (
          <option value={weather}>{capitalize(weather)}</option>
        ))
      }
    </select>
  </div>
);

export default LandingPage;
