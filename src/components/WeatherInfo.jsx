// display weather info if available, shows dummy data by default
export default function WeatherInfo({ weather }) {
    // Use dummy data if no weather data is provided
    const displayWeather = weather || {
        condition: "Sunny",
        location: "New York",
        region: "NY",
        temp: "75",
        feelsLike: "75",
        wind: "5",
        humidity: "45"
    };

    return (
        <div className="main-weather-display info">
            <div className="general-info">
                <p className="condition">{displayWeather.condition}</p>
                <h1 className="location">
                    {displayWeather.location}, {displayWeather.region}
                </h1>
                <span className="degrees">{displayWeather.temp}</span>
            </div>
            <div className="weather-details info">
                <p className="feels-like">FEELS LIKE: {displayWeather.feelsLike}</p>
                <p className="wind-mph">WIND: {displayWeather.wind} MPH</p>
                <p className="humidity">HUMIDITY: {displayWeather.humidity}</p>
            </div>
        </div>
    );
}