import React, { useState, useEffect } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';

const weatherData = {
  "London": { "temp": 15, "description": "Cloudy", "icon": "☁" },
  "Paris": { "temp": 18, "description": "Sunny", "icon": "☀" },
  "Tokyo": { "temp": 22, "description": "Rainy", "icon": "🌧" },
  "Toronto": { "temp": 10, "description": "Snowy", "icon": "❄" }
};

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city) {
      const cityData = weatherData[city];
      if (cityData) {
        setWeather(cityData);
        setError('');
      } else {
        setWeather(null);
        setError('City not found');
      }
    } else {
      setWeather(null);
      setError('');
    }
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherInput city={city} setCity={setCity} />
      <WeatherDisplay weather={weather} error={error} />
    </div>
  );
}

export default App;
