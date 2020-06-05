import React from 'react';

import WeatherCard from './Components/WeatherCard/component';
import './App.css';

function App()
{
  // Fetches data from the server's response
  // Returns a promise
  // When the promise is resolved, i will get the value of the response
  const data = async () => 
  {
    // Holds the response from the server
    // Waits to get response from server
    const apiRes = await fetch (
      "http://api.openweathermap.org/data/2.5/weather?q=windsor,ca&units=metric&APPID=52392332cfb0ced03c5c62e80a8bed23"
    );

    // Converts the response to JSON so we can work with it
    // Waits so the apiRes has a value
    const resJSON = apiRes.json();

    // Returns a promise;
    return resJSON;
  }

  // data() only returns the Promise which has promiseStatus and promiseValue
  // console.log(data());
  
  // Doing this you have access to the promiseValue;
  data().then(res => {
    console.log('the feels like is ' + res.main.feels_like);
    console.log('the temp max is ' + res.main.temp_max);
  });

  return (
    <div className = "App">
      <WeatherCard temp = {-5} condition = 'Clear' city = 'Syndney' country = 'AU'/>
      <WeatherCard temp = {15} condition = 'Clouds' city = 'Melbourne' country = 'AU'/>
      <WeatherCard temp = {40} condition = 'Tornado' city = 'London' country = 'GB'/>
    </div>
  );
}

export default App;