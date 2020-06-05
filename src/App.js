import React from 'react';

import WeatherCard from './Components/WeatherCard/component';
import './App.css';

function App()
{
  return (
    <div className = "App">
      <WeatherCard temp = {-5} condition = 'Clear' city = 'Syndney' country = 'AU'/>
      <WeatherCard temp = {15} condition = 'Clouds' city = 'Melbourne' country = 'AU'/>
      <WeatherCard temp = {40} condition = 'Tornado' city = 'London' country = 'GB'/>
    </div>
  );
}

export default App;