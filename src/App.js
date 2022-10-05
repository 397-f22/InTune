import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <>
      <Header></Header>
      <LandingPage
        weather={weather}
        setWeather={setWeather}
      />
    </>
  );
};

export default App;
