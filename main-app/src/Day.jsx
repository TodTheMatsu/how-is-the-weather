function Day({ maxTemperature, minTemperature, dayOfWeek, key }) {
    const isToday = dayOfWeek === "Today";
    
    return (
      <div
        className={`${
          isToday ? ' h-[250px] w-[180px]' : ' h-[200px] w-[150px]'
        } backdrop-blur-2xl bg-white bg-opacity-35 shadow-2xl rounded-lg flex flex-col items-center justify-center transition-all`}
      >
        <h1 className={`text-lg font-semibold ${isToday ? 'text-xl' : ''}`}>{dayOfWeek}</h1>
        <p className={`text-xl font-bold ${isToday ? 'text-2xl' : ''} text-red-600`}>
          {maxTemperature}°C
        </p>
        <p className={`text-xl ${isToday ? 'text-2xl' : ''} text-green-600`}>
          {minTemperature}°C
        </p>
      </div>
    );
  }
  
  export default Day;
  