import { useState, useEffect } from 'react';
import Day from './Day';
import cloud from './assets/cloud.mp4';
import Today from './Today';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('bg-sky-100');
  const [location, setLocation] = useState({ latitude: null, longitude: null, timeZone: null });
  const [loading, setLoading] = useState(true);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get weather condition based on the WMO code
  const getWeatherCondition = (weatherCode) => {
    const conditionMap = {
      0: 'clear_sky',
      1: 'mainly_clear',
      2: 'partly_cloudy',
      3: 'overcast',
      45: 'fog',
      48: 'fog',
      51: 'drizzle',
      53: 'drizzle',
      55: 'drizzle',
      56: 'freezing_drizzle',
      57: 'freezing_drizzle',
      61: 'rain',
      63: 'rain',
      65: 'rain',
      66: 'freezing_rain',
      67: 'freezing_rain',
      71: 'snow',
      73: 'snow',
      75: 'snow',
      77: 'snow_grains',
      80: 'rain_showers',
      81: 'rain_showers',
      82: 'rain_showers',
      85: 'snow_showers',
      86: 'snow_showers',
      95: 'thunderstorm',
      96: 'thunderstorm',
      99: 'thunderstorm',
    };

    return conditionMap[weatherCode] || 'cloudy';
  };

  const getBackgroundClass = () => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 7) {
      return 'bg-gradient-to-t from-yellow-200 via-yellow-300 to-yellow-400'; // Morning
    } else if (currentHour >= 7 && currentHour < 15) {
      return 'bg-gradient-to-t from-sky-400 via-sky-300 to-sky-100'; // Afternoon
    } else if (currentHour >= 15 && currentHour < 20) {
      return 'bg-gradient-to-t from-orange-500 via-red-500 to-pink-500'; // Evening
    } else {
      return 'bg-gradient-to-t from-indigo-900 via-purple-900 to-blue-900'; // Night
    }
  };

  // Fetch weather data based on dynamic latitude, longitude, and time zone
  const fetchWeather = async () => {
    if (location.latitude && location.longitude && location.timeZone) {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum&timezone=${location.timeZone}`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setLoading(false);
    }
  };

  // Get the user's current location and time zone
  useEffect(() => {
    const getUserLocation = () => {
      // Get user's location and time zone
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          setLocation({ latitude, longitude, timeZone });
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLoading(false); // Handle error (you could set default values or fallback here)
        }
      );
    };

    getUserLocation();

    // Set background class
    setBackgroundClass(getBackgroundClass());
    
    const intervalId = setInterval(() => {
      setBackgroundClass(getBackgroundClass());
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  // Trigger weather fetch when location is set
  useEffect(() => {
    if (location.latitude && location.longitude && location.timeZone) {
      fetchWeather();
    }
  }, [location]);

  if (loading || !weatherData) {
    return <div>Loading...</div>;
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative h-screen w-screen">
      <video
        autoPlay
        loop
        muted
        src={cloud}
        className="absolute top-0 left-0 w-full h-full object-cover blur-2xl"
      ></video>

      <div className={`${backgroundClass}backdrop-opacity-10 relative z-10 h-[200vh] flex items-top items-center flex-col justify-center space-x-5`}>
      <Today />
        <div className="-top-[500px] flex flex-grow-0 h-[300px] flex-row items-center justify-center space-x-5 relative">
          {weatherData.daily && weatherData.daily.temperature_2m_max.map((temp, index) => {
            const date = new Date(weatherData.daily.time[index]);
            const dayOfWeek = daysOfWeek[date.getDay()];
            const dateString = date.toISOString().split('T')[0];

            const displayDay = (dateString === today) ? "Today" : dayOfWeek;
            const weatherCondition = getWeatherCondition(weatherData.daily.weather_code[index]);
            const precipitation = weatherData.daily.precipitation_sum[index];

            return (
              <Day
                key={index}
                dayOfWeek={displayDay}
                maxTemperature={temp}
                minTemperature={weatherData.daily.temperature_2m_min[index]}
                weatherCondition={weatherCondition}
                precipitation={precipitation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
