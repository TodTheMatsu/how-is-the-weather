import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiShowers, WiFog, WiThunderstorm, WiHail } from 'react-icons/wi';

function Today({ weatherData, getWeatherCondition }) {
  const todayData = weatherData.daily ? weatherData.daily : null;
  const iconSize = 200;
  if (!todayData) {
    return <div>Loading...</div>;
  }

  const todayIndex = new Date().getDay(); // Get the index for today's data

  const todayWeather = {
    maxTemp: todayData.temperature_2m_max[todayIndex],
    minTemp: todayData.temperature_2m_min[todayIndex],
    condition: getWeatherCondition(todayData.weather_code[todayIndex]),
    feelsLike: todayData.temperature_2m_max[todayIndex], // Replace with actual "feels like" data if available
    humidity: 60, // Replace with actual humidity data if available
    windSpeed: todayData.wind_speed_10m_max[todayIndex],
    windGusts: todayData.wind_gusts_10m_max[todayIndex],
    uvIndex: todayData.uv_index_max[todayIndex],
    sunrise: todayData.sunrise[todayIndex],
    sunset: todayData.sunset[todayIndex],
    precipitation: todayData.precipitation_sum[todayIndex],
  };

  let weatherIcon;
  switch (todayWeather.condition) {
    case 'clear_sky':
      weatherIcon = <WiDaySunny size={iconSize} />;
      break;
    case 'mainly_clear':
    case 'partly_cloudy':
    case 'overcast':
      weatherIcon = <WiCloudy size={iconSize} />;
      break;
    case 'drizzle':
      weatherIcon = <WiShowers size={iconSize} />;
      break;
    case 'rain':
      weatherIcon = <WiRain size={iconSize} />;
      break;
    case 'snow':
      weatherIcon = <WiSnow size={iconSize} />;
      break;
    case 'thunderstorm':
      weatherIcon = <WiThunderstorm size={iconSize} />;
      break;
    case 'hail':
      weatherIcon = <WiHail size={iconSize} />;
      break;
    default:
      weatherIcon = <WiCloudy size={iconSize} />;
  }

  return (
    <div className="h-[450px] w-[1200px] -top-[500px] backdrop-blur-3xl bg-opacity-35 bg-white shadow-xl rounded-3xl p-8 flex flex-col items-start justify-center relative space-y-4">
      {/* Title */}
      <div className="text-black text-3xl font-bold mb-6 relative -bottom-5">
        <h1>Today's Weather</h1>
      </div>
      {/* Weather Icon and Condition */}
      <div className="flex items-center space-x-4 mb-4 -top-5 relative">
        {weatherIcon}
        <div className="text-black text-4xl font-bold">
          <p className="text-7xl">{todayWeather.maxTemp}°C</p>
          <p className="text-lg text-gray-100 bg-gray-800 bg-opacity-70 rounded-full px-3 py-0.5 mt-2 inline-block">
            {todayWeather.condition}
          </p>
        </div>
      </div>
      <div className='relative -top-10'>
      {/* Temperature and Feels Like */}
      <div className="flex space-x-10 text-black text-base">
        <div>
          <p className="text-gray-500">Feels like:</p>
          <p>{todayWeather.feelsLike}°C</p>
        </div>
        <div>
          <p className="text-gray-500">Humidity:</p>
          <p>{todayWeather.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-500">Wind:</p>
          <p>{todayWeather.windSpeed} km/h</p>
        </div>
      </div>

      {/* UV Index, Sunrise, Sunset */}
      <div className="flex space-x-10 text-black text-base">
        <div>
          <p className="text-gray-500">UV Index:</p>
          <p>{todayWeather.uvIndex}</p>
        </div>
        <div>
          <p className="text-gray-500">Sunrise:</p>
          <p>{new Date(todayWeather.sunrise).toLocaleTimeString()}</p>
        </div>
        <div>
          <p className="text-gray-500">Sunset:</p>
          <p>{new Date(todayWeather.sunset).toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Precipitation */}
      {todayWeather.precipitation && (
        <div className="text-black text-base">
          <p className="text-gray-500">Precipitation:</p>
          <p>{todayWeather.precipitation} mm</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Today;
