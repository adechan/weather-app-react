import React from 'react';

import WeatherEngine from './Components/WeatherEngine';
import './App.css';

function App()
{
  return (
   <div className = "App">
     <WeatherEngine location = "sydney, au" />
   </div>
  );
}

export default App;