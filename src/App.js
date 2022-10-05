import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SongRecommendationsPage from "./components/SongRecommendationsPage";
import './App.css';

const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage weather={weather} setWeather={setWeather} />} />
          <Route path="/songs" element={<SongRecommendationsPage weather={weather} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
