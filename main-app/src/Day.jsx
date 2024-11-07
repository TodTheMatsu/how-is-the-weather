import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

function Day({ maxTemperature, minTemperature, dayOfWeek, weatherCondition }) {
  const isToday = dayOfWeek === "Today";
  
  // Set icon and text sizes based on whether it's today
  const iconSize = isToday ? 70 : 50;
  const textSize = isToday ? 'text-3xl' : 'text-xl';
  const tempSize = isToday ? 'text-2xl' : 'text-lg';

  let weatherIcon;
  switch (weatherCondition) {
    case 'sunny':
      weatherIcon = <WiDaySunny size={iconSize} />;
      break;
    case 'cloudy':
      weatherIcon = <WiCloudy size={iconSize} />;
      break;
    case 'rainy':
      weatherIcon = <WiRain size={iconSize} />;
      break;
    case 'snowy':
      weatherIcon = <WiSnow size={iconSize} />;
      break;
    default:
      weatherIcon = <WiCloudy size={iconSize} />;
  }

  return (
    <div
      className={`${
        isToday ? 'h-[250px] w-[180px]' : 'h-[200px] w-[150px]'
      } backdrop-blur-2xl bg-white bg-opacity-35 shadow-2xl rounded-lg flex flex-col items-center justify-center transition-all relative`}
    >
      {weatherIcon}
      <h1
        className={`text-md font-sans font-semibold absolute ${textSize} top-2 left-2`}
      >
        {dayOfWeek}
      </h1>
      <p className={`font-semibold ${tempSize}`}>
        {maxTemperature}°
      </p>
      <p className={`text-xl ${tempSize}`}>
        {minTemperature}°
      </p>
    </div>
  );
}

export default Day;
