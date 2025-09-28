// import local components and hooks
import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import { fetchWeather } from './services/weatherApi';

// create main app component
export default function App() {
  // states to hold weather data and error message
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  // create handleSearch to use the fetchWeather function to get weather data from API
  // it updates the weather state with the fetched data or sets an error message
  const handleSearch = async (q) => {
    try {
      setError('');
      const w = await fetchWeather(q);
      setWeather(w);
    } catch {
      setWeather(null);
      setError('Location not found');
    }
  };

  return (
    <>
      <div id="main-container">
        <header>
          <h1 className="title">🌡️ Live Weather App</h1>
        </header>
        {/* when user searches, call handleSearch, pass error state as boolean */}
        <SearchForm onSearch={handleSearch} error={!!error} />
        {/* pass the fetched weather data as a prop to WeatherInfo component */}
        <WeatherInfo weather={weather} />
      </div>

      <footer className="footer">
        Built with React — source code
        &nbsp;<a href="https://github.com/rogerqiu7/live-weather-app">on GitHub</a>
      </footer>
    </>
  );
}