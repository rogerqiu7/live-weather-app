// create weatherinfo function that takes weather prop and displays it, shows dummy data by default
export default function WeatherInfo({ weather }) {
    // dummy data, if weather exists, else use dummy data
    const displayWeather = weather || {
        condition: "Sunny",
        location: "New York",
        region: "NY",
        temp: "75",
        feelsLike: "75",
        wind: "5",
        humidity: "45"
    };
    // return the html structure to display the weather information
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