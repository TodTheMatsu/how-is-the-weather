import { useState } from 'react'
import Day from './Day'

function App() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(<Day/>);
  }

  return (
    <div className='bg-sky-100 h-screen w-screen flex flex-row items-center justify-center space-x-5'>
      <div className='w-[1300px] h-[400px] flex flex-row items-center justify-center space-x-5 bg-gradient-to-br from-sky-300 to-sky-500 shadow-2xl rounded-3xl'>
      {days}
      </div>

    </div>
  );
}

export default App
