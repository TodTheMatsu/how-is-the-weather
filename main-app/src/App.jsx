import { useState } from 'react'
import Day from './Day'

function App() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(<Day/>);
  }

  return (
    <div className='bg-gray-100 h-screen w-screen flex flex-row items-center justify-center space-x-5'>
      {days}
    </div>
  );
}

export default App
