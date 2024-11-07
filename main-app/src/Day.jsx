function Day({ maxTemperature, minTemperature, dayOfWeek }) {
    const isToday = dayOfWeek === "Today";
    
    return (
      <div
        className={`${
          isToday ? ' h-[250px] w-[180px]' : ' h-[200px] w-[150px]'
        } backdrop-blur-2xl bg-white bg-opacity-35 shadow-2xl rounded-lg flex flex-col items-center justify-center transition-all`}
      >
        <h1 className={`text-lg font-sans font-semibold ${isToday ? 'text-xl' : ''}`}>{dayOfWeek}</h1>
        <p className={`text-xl font-bold ${isToday ? 'text-2xl' : ''} text-red-600`}>
          {maxTemperature}°C
        </p>
        <p className={`text-xl font-bold ${isToday ? 'text-2xl' : ''} text-green-500`}>
          {minTemperature}°C
        </p>
      </div>
    );
  }
  
  export default Day;
  