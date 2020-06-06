import React from 'react';
import {useState} from 'react';

import WeatherCard from './Components/WeatherCard/component';
import './App.css';

function App()
{
  // city = stateVariable
  // setCity function that updates that stateVariable
  const [query, setQuery] = useState("London, gb");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");


  // Fetches data from the server's response
  // Returns a promise
  // When the promise is resolved, i will get the value of the response
  const data = async (query) => 
  {
    // Holds the response from the server
    // Waits to get response from server
    const apiRes = await fetch (
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=52392332cfb0ced03c5c62e80a8bed23`
    );

    // Converts the response to JSON so we can work with it
    // Waits so the apiRes has a value
    const resJSON = apiRes.json();

    // Returns a promise;
    return resJSON;
  };

  // data() only returns the Promise which has promiseStatus and promiseValue
  // console.log(data());
  
  // Doing this you have access to the promiseValue;
  // data().then(res => {
  //   console.log('the feels like is ' + res.main.feels_like);
  //   console.log('the temp max is ' + res.main.temp_max);
  // });

  // The click event
  const handleSearch = e =>
  {
    // Prevents the default action that this button was supposed to do in normal HTML
    // If you are not using this, the page would just be refreshed
    e.preventDefault();

    // Does a fetch
    // Doing this you have access to the promiseValue;
    // res = promisedValue
    data(query).then(res => {

    // using this updating function, forces a re-render
    setTemp(res.main.temp);
    setCondition(res.weather[0].main);
    setCountry(res.sys.country);
    setCity(res.name);
    });
  }

  return (
    <div className = "App">
      <WeatherCard temp = {temp} condition = {condition} city = {city} country = {country}/>
      {/* <WeatherCard temp = {15} condition = 'Clouds' city = 'Melbourne' country = 'AU'/>
      <WeatherCard temp = {40} condition = 'Tornado' city = 'London' country = 'GB'/> */}
      <form >

      {/* I want to take whatever input the user gives me
      and update the stateVariable, city */}
      {/* When the user clicks on "Search" I want to fetch whatever value
      that comes back from the API */}

        <input value = {query} onChange = {e => setQuery(e.target.value)}/>
        <button onClick = {e => handleSearch(e)}> Search </button>

      </form>
    </div>
  );
}

export default App;