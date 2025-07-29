import React from "react";

const StaticMeter = () => {
  return (
    <div class='flex items-center justify-center'>
      <div class='relative w-60 h-30'>
        <svg viewBox='0 0 200 100' class='w-full h-full'>
          <path d='M10,100 A90,90 0 0,1 190,100' fill='none' stroke='#e5e7eb' stroke-width='20' />

          <path d='M10,100 A90,90 0 0,1 140,25' fill='none' stroke='#8b5cf6' stroke-width='20' stroke-linecap='round' />

          <path d='M140,25 A90,90 0 0,1 150,20' fill='none' stroke='#84cc16' stroke-width='4' />

          <defs>
            <pattern id='stripes' patternUnits='userSpaceOnUse' width='10' height='10'>
              <path d='M0,10 L10,0' stroke='#d1d5db' stroke-width='2' />
            </pattern>
          </defs>
          <path d='M150,20 A90,90 0 0,1 190,100' fill='none' stroke='url(#stripes)' stroke-width='20' />
        </svg>

        <div class='absolute inset-0 flex flex-col items-center justify-center'>
          <span class='text-3xl font-bold text-gray-800'>65%</span>
          <span class='text-gray-500'>Progress</span>
        </div>
      </div>
    </div>
  );
};

export default StaticMeter;
