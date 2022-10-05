import { useState } from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState("");

  return (
    <Header></Header>
  );
};

export default App;
