# Live Weather App

A React-based weather app that gives real-time weather info using the WeatherAPI.com service.

## Architecture

### Component Structure
```
App (manages state and data flow)
├── SearchForm (handles user input)
└── WeatherInfo (displays weather data)
```

### Key Components

- **App** (`src/App.jsx`): Main component that manages application state (`weather` and `error` states) 
- **SearchForm** (`src/components/SearchForm.jsx`): Handles user input and search validation
- **WeatherInfo** (`src/components/WeatherInfo.jsx`): Displays weather information with fallback to default data
- **weatherApi** (`src/services/weatherApi.js`): Handles API communication and data processing

### Data Flow Example: Searching for "Dallas"

1. User types "Dallas" in the search box and submits the form in **SearchForm**.
2. The `onSearch` prop is called with "Dallas" as the argument.
3. The **App** component's `handleSearch` function is triggered.
4. `handleSearch` calls `fetchWeather("Dallas")` from the API service.
5. `fetchWeather` makes an HTTP request to WeatherAPI.com and processes the response.
6. The processed weather data is stored in the App's state.
7. The **WeatherInfo** component receives the new weather data as a prop from **App**.
8. **WeatherInfo** renders the weather details for Dallas (temperature, location, condition, wind speed, humidity).

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

## Deployment to GitHub Pages

To deploy this app to GitHub Pages, follow these steps:

1. **Set the correct base path for Vite**
   - In `vite.config.js`, set:
     ```js
     export default defineConfig({
       base: '/live-weather-app/',
       plugins: [react()],
     })
     ```

2. **Install the gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add a deploy script to your `package.json`**
   ```json
   "scripts": {
     // ...existing scripts
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Build and deploy your app**
   ```bash
   npm run build   # Bundles your app into static files in the dist/ folder
   npm run deploy  # Publishes dist/ to the gh-pages branch for GitHub Pages
   ```

5. **Configure GitHub Pages**
   - In your repository settings, set GitHub Pages to deploy from the `gh-pages` branch.

### What do these commands do?
- `npm run build`: Bundles your source code into static files for production, outputting them to the `dist/` folder.
- `npm run deploy`: Uses the `gh-pages` package to publish the contents of `dist/` to the `gh-pages` branch, which GitHub Pages serves as your website.