// URL and key for API
const API = 'https://api.weatherapi.com/v1/forecast.json';
const key = '1986480656ec490d950204923202611';

// create function to process and clean up the fetched weather data
function processWeatherData(data) {
    return {
        condition: data.current.condition.text,
        temp: Math.round(data.current.temp_f),
        feelsLike: Math.round(data.current.feelslike_f),
        wind: Math.round(data.current.wind_mph),
        humidity: data.current.humidity,
        location: data.location.name.toUpperCase(),
        region: (data.location.country === 'United States of America'
            ? data.location.region
            : data.location.country
        ).toUpperCase(),
    };
}

// function to fetch and await weather data from the API
// allow cross origin connect, encode the query to handle special characters
// throw error if response not ok, else return processed weather data
export async function fetchWeather(q) {
    const url = `${API}?key=${key}&q=${encodeURIComponent(q)}`;
    const res = await fetch(url, { mode: 'cors' });
    if (!res.ok) throw new Error('Location not found');

    const data = await res.json();
    return processWeatherData(data);
}
