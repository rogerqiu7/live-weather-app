# Live Weather App

A React-based weather app that gives real-time weather info using the WeatherAPI.com service.

## Architecture

### Key Components

- **App** (`src/App.jsx`): Main component that manages application state (`weather` and `error` states) 
- **SearchForm** (`src/components/SearchForm.jsx`): Handles user input and search validation
- **WeatherInfo** (`src/components/WeatherInfo.jsx`): Displays weather information with fallback to default data
- **weatherApi** (`src/services/weatherApi.js`): Fatches weather data from API and data processing

### Data Flow Example: Searching for "Dallas"

1. Webpage is displayed with the App component, SearchForm is displayed
2. User types "Dallas" in the search box and submits the form in **SearchForm**.
3. The `onSearch` prop is called with "Dallas" as the argument.
4. The **App** component's `handleSearch` function is triggered.
5. `handleSearch` calls `fetchWeather("Dallas")` from the API service.
6. `fetchWeather` makes an HTTP request to WeatherAPI.com and processes the response.
7. The processed weather data is stored in the App's state.
8. The **WeatherInfo** component receives the new weather data as a prop from **App**.
9. **WeatherInfo** renders the weather details for Dallas (temperature, location, condition, wind speed, humidity).

## Setup and Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser


## Technical Stack

- React 19.1
- Vite 7.1
- WeatherAPI.com for weather data
- CSS for styling

## Features

- Real-time weather data fetching
- Error handling and validation
- Responsive design
- Fallback UI with default data
- City search with auto-encoding