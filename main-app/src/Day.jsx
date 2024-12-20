import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiShowers, WiFog, WiThunderstorm, WiHail } from 'react-icons/wi';
import {motion} from "framer-motion"
function Day({ maxTemperature, minTemperature, dayOfWeek, weatherCondition, precipitation, windSpeed, index, uvIndex, sunrise, sunset }) {
  const isToday = dayOfWeek === "Today";
  const iconSize = isToday ? 70 : 50;
  const textSize = isToday ? 'text-3xl' : 'text-xl';
  const tempSize = isToday ? 'text-2xl' : 'text-lg';

  let weatherIcon;
  switch (weatherCondition) {
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
    <motion.div className={`${
      isToday ? 'h-[250px] w-[180px]' : 'h-[200px] w-[150px]'
    } backdrop-blur-3xl bg-white bg-opacity-35 shadow-2xl rounded-lg flex flex-col items-center justify-center transition-all relative`}
    initial={{ x: 200 }} whileInView={{ x: 0, transition: { duration: index*0.07, delay: 0.2} }}>
      {weatherIcon}
      <h1 className={`text-md font-sans font-semibold absolute ${textSize} top-2`}>
        {dayOfWeek}
      </h1>
      <p className={`font-semibold ${tempSize}`}>
        {maxTemperature}°
      </p>
      <p>{minTemperature}°</p>

      {/* Precipitation */}
      {precipitation && (
        <p className="text-sm text-gray-700">
          {precipitation} mm of {weatherCondition === 'snow' ? 'snow' : 'rain'}
        </p>
      )}

      {/* Wind */}
      {windSpeed && (
        <p className="text-sm text-gray-700">
          Wind: {windSpeed} km/h
        </p>
      )}

      {/* UV Index */}
      {uvIndex && (
        <p className="text-sm text-gray-700">
          UV Index: {uvIndex}
        </p>
      )}

      {/* Sunrise and Sunset */}
      {sunrise && sunset && (
        <div className="text-sm text-gray-700">
          <p>Sunrise: {new Date(sunrise).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(sunset).toLocaleTimeString()}</p>
        </div>
      )}
    </motion.div>
  );
}

export default Day;
