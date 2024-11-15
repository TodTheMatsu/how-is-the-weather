import React from 'react';

function Loading({ isLoading }) {
  return (
    <div
      className={`fixed w-full h-full top-0 left-0 inset-0 flex justify-center items-center bg-white z-50 transition-opacity duration-1000 delay-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        <div
          className="animate-spin inline-block w-16 h-16 border-4 border-solid rounded-full border-t-transparent border-gray-800"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-gray-800 text-xl">Loading, please wait...</p>
      </div>
    </div>
  );
}

export default Loading;
