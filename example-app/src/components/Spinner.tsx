import React from 'react';

export const Spinner = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50'>
      <div className='flex justify-center items-center mt-[30vh]'>
        <div className='fas fa-circle-notch fa-spin fa-5x text-violet-600'>
          <div className='relative'>
            <div className='h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200'></div>
            <div className='absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
