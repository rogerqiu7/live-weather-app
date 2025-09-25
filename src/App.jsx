import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import { fetchWeather } from './services/weatherApi';

// main App component that manages the weather data and user interactions
export default function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  // handleSearch function fetches weather data for a given query
  // it updates the weather state with the fetched data or sets an error message if the fetch
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

        <SearchForm onSearch={handleSearch} error={!!error} />
        <WeatherInfo weather={weather} />
      </div>

      <footer className="footer">
        Built with React — source code
        &nbsp;<a href="https://github.com/rogerqiu7/live-weather-app">on GitHub</a>
      </footer>
    </>
  );
}