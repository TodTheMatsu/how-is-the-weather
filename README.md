
---

# Weather App

A modern, responsive weather application built with React. It provides real-time weather data for your location, displaying both current and forecasted weather conditions with beautiful animated backgrounds.

## Features

- **Current Weather**: Displays current temperature, weather conditions, and more.
- **Forecast**: Shows daily weather information, including temperature, precipitation, and conditions.
- **Dynamic Background**: Background video changes based on the time of day (morning, afternoon, evening, night).
- **Location Detection**: Automatically detects your location and fetches weather data based on your coordinates.
- **Weather Data**: Fetches detailed weather data from the Open-Meteo API, including hourly and daily forecasts.

## Demo

(Not yet available)

## Screenshots

![image](https://github.com/user-attachments/assets/da275d72-41b5-4ebb-9a4e-02b8be00ce7b)


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Open-Meteo API**: Provides weather forecast data.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **HTML5 Video**: Used for animated background video.

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. **Navigate into the project folder**:

```bash
cd weather-app
```

3. **Install dependencies**:

```bash
npm install
```

4. **Start the development server**:

```bash
npm start
```

5. **Visit the app** in your browser:

```bash
http://localhost:3000
```

## API Integration

This project uses the [Open-Meteo API](https://open-meteo.com/) for weather data. The application fetches weather data based on the user's current geographical location (latitude, longitude). The weather API provides information like current weather, daily forecasts, and more.

## App Structure

- **`src/App.js`**: Main app component, responsible for fetching weather data, rendering the UI, and managing application state.
- **`src/Today.js`**: Displays the current weather information.
- **`src/Day.js`**: Displays a daily weather card with the forecast.
- **`src/assets/cloud.mp4`**: Background video used to create a dynamic background.

## How it Works

1. The app gets the user's location using the browser's `navigator.geolocation` API.
2. Weather data is fetched from the Open-Meteo API based on the user's location and timezone.
3. The app sets a background video based on the time of day (morning, afternoon, evening, or night).
4. The user sees the current weather and a forecast for the upcoming days.

## Contribution

Contributions are welcome! If you'd like to improve this project or fix bugs, feel free to fork the repository and create a pull request.

1. Fork the repo.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- **Open-Meteo API**: For providing the weather data.
- **Tailwind CSS**: For making it easy to style the application.
- **React**: For providing an excellent framework for building dynamic web applications.
- **Cloud video**: Video sourced from [Insert video source if necessary].

---
