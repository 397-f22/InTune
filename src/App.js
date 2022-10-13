import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SongRecommendationsPage from "./components/SongRecommendationsPage";
import './App.css';
import { getLocation } from "./utilities/location";

const App = () => {
  const [weather, setWeather] = useState("");
  getLocation();

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage weather={weather} setWeather={setWeather} />} />
          <Route
            path="/songs"
            element = {
                        (weather === "")
                        ? <Navigate to="/" />
                        : <SongRecommendationsPage weather={weather} />
                      }
          />
        </Routes>
      </BrowserRouter>
    </>  );
};

export default App;
