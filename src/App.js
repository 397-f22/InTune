import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SongRecommendationsPage from "./components/SongRecommendationsPage";
import './App.css';
import { getLocationDetails, getSeason } from "./utilities/location";

const App = () => {

  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [autoGeneratedWeather, setAutoGeneratedWeather] = useState(false);
  const [city, setCity] = useState("");

  const weatherDict = {
    "Clouds": "Cloudy",
    "Snow": "Snowy",
    "Clear": "Clear",
    "Rain": "Rainy",
    "Drizzle": "Drizzly",
    "Thunderstorm": "Stormy"
  }

  useEffect(() => {
    (async () => {
      const weather = await getLocationDetails();
      if (Object.keys(weather).length === 0) {

        setWeather("Error"); // NOTE: Indicates lack of permissions (for location data), failed API call etc.
      } else {
        setCity(weather.name);
        let weatherName =  weather["weather"][0]["main"];
        if(Object.keys(weatherDict).includes(weatherName)){
          weatherName = weatherDict[weatherName];
        }
        setWeather(weatherName); // NOTE: Else, in success case, set to strong representing weather
        setWeatherIcon(weather["weather"][0]["icon"]);
        setAutoGeneratedWeather(true);
      };
    }) ();
  }, []);

    if (!weather) {
      return (
        <div>Loading geolocation and weather data...</div>
      );
    } else {
      return (
        <div className={`color-gradient-${getSeason().toLowerCase()}`}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                                        (weather === "Error" || !autoGeneratedWeather)
                                        ? <LandingPage
                                            weather={weather}
                                            setWeather={setWeather}
                                            autoGeneratedWeather={autoGeneratedWeather}
                                          />
                                        : <Navigate to="/songs" />
                                      }
              />
              <Route
                path="/songs"
                element = {
                            (weather === "Error")
                            ? <Navigate to="/" />
                            : <SongRecommendationsPage
                                weather={weather}
                                setWeather={setWeather}
                                weatherIcon={weatherIcon}
                                autoGeneratedWeather={autoGeneratedWeather}
                                city={city}
                              />
                          }
              />
            </Routes>
          </BrowserRouter>
        </div>
      );
    };
};

export default App;
