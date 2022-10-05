import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SongRecommendationsPage from "./components/SongRecommendationsPage";
import './App.css';
import { Hellow } from "./components/Hello";

const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <Hellow />
  );
};

export default App;
