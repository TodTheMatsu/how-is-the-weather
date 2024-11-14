import React from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiShowers,
  WiFog,
  WiThunderstorm,
  WiHail,
  WiSunrise,
  WiSunset,
} from 'react-icons/wi';

function Today({ weatherData, getWeatherCondition }) {
  const todayData = weatherData.daily ? weatherData.daily : null;
  const hourlyData = weatherData.hourly ? weatherData.hourly : null; // Add hourly data
  const iconSize = 200;

  if (!todayData || !hourlyData) {
    return <div>Loading...</div>;
  }

  const todayIndex = 0; // Since the API's daily array starts with today as the first element

  const todayWeather = {
    maxTemp: todayData.temperature_2m_max[todayIndex],
    minTemp: todayData.temperature_2m_min[todayIndex],
    condition: getWeatherCondition(todayData.weather_code[todayIndex]),
    windSpeed: todayData.wind_speed_10m_max[todayIndex],
    windGusts: todayData.wind_gusts_10m_max[todayIndex],
    uvIndex: todayData.uv_index_max[todayIndex],
    sunrise: todayData.sunrise[todayIndex],
    sunset: todayData.sunset[todayIndex],
    precipitation: todayData.precipitation_sum[todayIndex],
  };

  // Get the current hour and use it to get the current temperature
  const currentHour = new Date().getHours();
  const currentTemperature = hourlyData.temperature_2m[currentHour];

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
    case 'freezing_drizzle':
      weatherIcon = <WiShowers size={iconSize} />;
      break;
    case 'rain':
      weatherIcon = <WiRain size={iconSize} />;
      break;
    case 'freezing_rain':
      weatherIcon = <WiRain size={iconSize} />;
      break;
    case 'snow':
      weatherIcon = <WiSnow size={iconSize} />;
      break;
    case 'snow_grains':
      weatherIcon = <WiSnow size={iconSize} />;
      break;
    case 'rain_showers':
      weatherIcon = <WiShowers size={iconSize} />;
      break;
    case 'snow_showers':
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
    <div className="h-[400px] w-[1200px] -top-[350px] backdrop-blur-3xl bg-opacity-35 bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center relative space-y-4">
      <div className="text-black text-3xl font-bold mb-6 relative -bottom-5">
        <h1>Today's Weather</h1>
      </div>

      <div className="flex items-center space-x-4 -top-5 relative">
        {weatherIcon}

        <div className="text-black text-4xl font-semibold">
          {/* Display the current temperature */}
          <p className="text-7xl">{currentTemperature}°C</p>
          <p className="text-lg text-gray-500 bg-opacity-70 rounded-full px-3 py-0.5 mt-2 inline-block">
            {todayWeather.condition.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4 text-black text-base relative -top-5">
        {/* UV Index, Sunrise, and Sunset */}
        <div className="flex space-x-4">
          <div className="items-center flex flex-col">
            <p className="text-gray-500">UV Index:</p>
            <p>{todayWeather.uvIndex}</p>
          </div>
          <div className="relative -top-6 items-center flex flex-col">
            <WiSunrise size={25} />
            <p className="text-gray-500">Sunrise:</p>
            <p>{new Date(todayWeather.sunrise).toLocaleTimeString()}</p>
          </div>
          <div className="relative -top-6 items-center flex flex-col">
            <WiSunset size={25} />
            <p className="text-gray-500">Sunset:</p>
            <p>{new Date(todayWeather.sunset).toLocaleTimeString()}</p>
          </div>
        </div>
        {/* Temperature */}
        <div className="flex space-x-4">
          <div className="items-center flex flex-col">
            <p className="text-gray-500">Min Temp:</p>
            <p>{todayWeather.minTemp}°C</p>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-gray-500">Max Temp:</p>
            <p>{todayWeather.maxTemp}°C</p>
          </div>
        </div>

        {/* Wind Speed and Gusts */}
        <div className="flex space-x-4">
          <div className="items-center flex flex-col">
            <p className="text-gray-500">Wind Speed:</p>
            <p>{todayWeather.windSpeed} km/h</p>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-gray-500">Wind Gusts:</p>
            <p>{todayWeather.windGusts} km/h</p>
          </div>
        </div>

        {/* Precipitation */}
        {todayWeather.precipitation !== undefined && (
          <div className="items-center flex flex-col">
            <p className="text-gray-500">Precipitation:</p>
            <p>{todayWeather.precipitation} mm</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Today;
