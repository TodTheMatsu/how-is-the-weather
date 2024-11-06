import { useState, useEffect } from 'react';
import Day from './Day';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('bg-sky-100');

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Function to determine background color based on the current hour
  const getBackgroundClass = () => {
    const currentHour = new Date().getHours();
    
    // Assign background colors based on the time of day
    if (currentHour >= 6 && currentHour < 12) {
      return 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400'; // Morning
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100'; // Afternoon
    } else if (currentHour >= 18 && currentHour < 21) {
      return 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500'; // Evening
    } else {
      return 'bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700'; // Night
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const latitude = 10.867;
      const longitude = 106.917;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok`
      );
      const data = await response.json();
      console.log(data);

      setWeatherData(data);
    };

    fetchWeather();

    // Set background class based on the time of day
    setBackgroundClass(getBackgroundClass());

    // Optional: Update background color every hour
    const intervalId = setInterval(() => {
      setBackgroundClass(getBackgroundClass());
    }, 3600000); // Update every hour

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Only fetch once on mount

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`${backgroundClass} h-screen w-screen flex flex-row items-center justify-center space-x-5 animate-gradient`}>
      <div className='flex flex-row items-center justify-center space-x-5'>
        {weatherData.daily && weatherData.daily.temperature_2m_max.map((temp, index) => {
          const date = new Date(weatherData.daily.time[index]);
          const dayOfWeek = daysOfWeek[date.getDay()];
          const dateString = date.toISOString().split('T')[0];

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
    </div>
  );
}

export default App;
