import { useState, useEffect } from 'react';
import Day from './Day';
import cloud from './assets/cloud.mp4';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('bg-sky-100');

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Function to determine background color based on the current hour
  const getBackgroundClass = () => {
    const currentHour = new Date().getHours();
    
    // Assign background colors based on the time of day
    if (currentHour >= 5 && currentHour < 7) {
      return 'bg-gradient-to-t from-yellow-200 via-yellow-300 to-yellow-400'; // Morning
    } else if (currentHour >= 7&& currentHour < 12) {
      return 'bg-gradient-to-t from-sky-400 via-sky-300 to-sky-100'; // Afternoon
    } else if (currentHour >= 12 && currentHour < 20) {
      return 'bg-gradient-to-t from-orange-500 via-red-500 to-pink-500'; // Evening
    } else {
      return 'bg-gradient-to-t from-indigo-900 via-purple-900 to-blue-900'; // Night
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
    setBackgroundClass(getBackgroundClass());

    const intervalId = setInterval(() => {
      setBackgroundClass(getBackgroundClass());
    }, 3600000);

    return () => clearInterval(intervalId); 
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative h-screen w-screen">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        src={cloud}
        className="absolute top-0 left-0 w-full h-full object-cover blur-2xl"
      ></video>

      {/* Main content */}
      <div className={`${backgroundClass}backdrop-opacity-10 relative z-10 h-[2000px] flex items-center justify-center space-x-5`}>
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
    </div>
  );
}

export default App;
