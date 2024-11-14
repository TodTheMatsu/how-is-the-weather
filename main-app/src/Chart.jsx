import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine, LabelList } from 'recharts';

function Chart({ weatherData }) {
  const today = new Date().toISOString().split('T')[0];
  const currentHour = new Date().getHours();

  // Filter the hourly data to include only entries for today
  const todayHourlyData = weatherData.hourly.time
    .map((time, index) => {
      const date = new Date(time).toISOString().split('T')[0];
      if (date === today) {
        return {
          time: new Date(time).getHours(),
          temperature: weatherData.hourly.temperature_2m[index],
        };
      }
      return null;
    })
    .filter(Boolean);

  // Temperature values for min/max range calculation
  const temperatures = todayHourlyData.map((data) => data.temperature);
  const minTemperature = Math.min(...temperatures) - 5;
  const maxTemperature = Math.max(...temperatures) + 5;

  const formatTemperature = (value) => value.toFixed(1);

  return (
    <div className="h-[400px] w-[1200px] -top-[350px] backdrop-blur-3xl bg-opacity-35 bg-white shadow-xl rounded-3xl p-5 flex flex-col items-center justify-center relative">
      <h2 className="text-lg font-semibold">Today's Temperature</h2>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={todayHourlyData}>
          <defs>
            <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA500" stopOpacity={1} />
              <stop offset="95%" stopColor="#FF4500" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="time" label={{ value: 'Hour', position: 'insideBottom', offset: -5 }} />
          <YAxis
            yAxisId="left"
            domain={[minTemperature, maxTemperature]}
            label={{ value: '', angle: -90, position: 'insideLeft' }}
            tickFormatter={formatTemperature}
            stroke="none"
          />
          <Tooltip labelFormatter={formatTemperature} formatter={(value) => formatTemperature(value)} />

          <Area
            yAxisId="left"
            type="natural"
            dataKey="temperature"
            stroke=""
            fill="url(#temperatureGradient)"
            name="Temperature"
          >
            <LabelList dataKey="temperature" position="top" formatter={formatTemperature} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
