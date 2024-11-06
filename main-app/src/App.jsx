import { useState, useEffect } from 'react';
import Day from './Day';  // Assuming Day is a component you created to display the temperature

function App() {
  const [weatherData, setWeatherData] = useState(null);  // Initialize as null to handle the loading state

  // Array to map day index to actual weekday name
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Fetch weather data for the next 7 days
  useEffect(() => {
    const fetchWeather = async () => {
      const latitude = 10.867;
      const longitude = 106.917;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok`
      );
      const data = await response.json();
      console.log(data);

      // Set the fetched data to the state
      setWeatherData(data);
    };

    fetchWeather();
  }, []); // Empty dependency array to run only once when the component mounts

  // Render loading message if weatherData is not yet available
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Get today's date for comparison
  const today = new Date().toISOString().split('T')[0];  // Get current date in YYYY-MM-DD format

  return (
    <div className='bg-gradient-to-r from-sky-100 via-sky-300 to-sky-100 h-screen w-screen flex flex-row items-center justify-center space-x-5 '>
        {/* Check if daily data is available, then map through it */}
        {weatherData.daily && weatherData.daily.temperature_2m_max.map((temp, index) => {
          // Get the date for the current day from the 'time' field
          const date = new Date(weatherData.daily.time[index]);
          const dayOfWeek = daysOfWeek[date.getDay()];  // Get day of the week (0 = Sunday, 1 = Monday, etc.)
          const dateString = date.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format

          // If the date matches today's date, use "Today" instead of the day of the week
          const displayDay = (dateString === today) ? "Today" : dayOfWeek;

          return (
            <Day
              key={index}
              dayOfWeek={displayDay}  
              maxTemperature={temp}   
              minTemperature={weatherData.daily.temperature_2m_min[index]} 
            />
          );
        })}
    </div>
  );
}

export default App;
