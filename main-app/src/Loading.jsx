// Loading.js
import React from 'react';

function Loading() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid rounded-full border-t-transparent border-gray-800" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-gray-800 text-xl">Loading, please wait...</p>
      </div>
    </div>
  );
}

export default Loading;
