---

# Weather App

A modern, responsive weather application built with React. It provides real-time weather data for your location, displaying both current and forecasted weather conditions with beautiful animated backgrounds.

## Features

- **Current Weather**: Displays current temperature, weather conditions, and more.
- **Forecast**: Shows daily weather information, including temperature, precipitation, and conditions.
- **Dynamic Background**: Background video changes based on the time of day (morning, afternoon, evening, night).
- **Location Detection**: Automatically detects your location and fetches weather data based on your coordinates.
- **Weather & News Data**: Fetches detailed weather data from the Open-Meteo API and relevant news articles from the Newsdata.io API.

## Demo

(Not yet available)

## Screenshots

![image](https://github.com/user-attachments/assets/da275d72-41b5-4ebb-9a4e-02b8be00ce7b)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Open-Meteo API**: Provides weather forecast data.
- **Newsdata.io API**: Supplies relevant news articles based on weather topics.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **HTML5 Video**: Used for animated background video.
- **Vite**: A fast build tool and development server.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate into the project folder**:

   ```bash
   cd main-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up your News API key**:

   - Go to [Newsdata.io](https://newsdata.io/) and sign up to get an API key.
   - Create a `.env` file in the root of the project and add your API key:

     ```plaintext
     VITE_NEWS_API_KEY=your_news_api_key_here
     ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Visit the app** in your browser:

   ```bash
   http://localhost:3000
   ```

## API Integration

This project uses the [Open-Meteo API](https://open-meteo.com/) for weather data and [Newsdata.io](https://newsdata.io/) for news. The application fetches weather data based on the user's current geographical location (latitude, longitude), while the news API provides relevant articles based on weather topics.

## App Structure

- **`src/App.js`**: Main app component, responsible for fetching weather and news data, rendering the UI, and managing application state.
- **`src/Today.js`**: Displays the current weather information.
- **`src/Day.js`**: Displays a daily weather card with the forecast.
- **`src/assets/cloud.mp4`**: Background video used to create a dynamic background.

## How it Works

1. The app gets the user's location using the browser's `navigator.geolocation` API.
2. Weather data is fetched from the Open-Meteo API based on the user's location and timezone.
3. News articles are fetched from Newsdata.io, using a weather-related query.
4. The app sets a background video based on the time of day (morning, afternoon, evening, or night).
5. The user sees the current weather, a forecast for the upcoming days, and relevant news articles.

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

---
