"use client";
import React, { useState } from "react";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreSwitch from "../CoreSwitch/CoreSwitch";

export const CoreSwiperCard = ({ heading1, heading2, component1, component2, icon1, icon2 }) => {
  const [state, setState] = useState(0);

  const Component1 = component1;
  const Component2 = component2;

  const Icon1 = icon1;
  const Icon2 = icon2;

  const toggleSwitch = () => {
    setState((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className='w-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-100 rounded-full p-1'>
            {state === 0 ? <Icon1 className='w-5 h-5' strokeWidth={2} /> : <Icon2 className='w-5 h-5' strokeWidth={2} />}
          </div>
          <CoreHeading type='h2' className='font-semibold'>
            {state === 0 ? heading1 : heading2}
          </CoreHeading>
        </div>
        <CoreSwitch checked={!!state} onChange={toggleSwitch} leftIcon={icon1} rightIcon={icon2} />
      </div>
      <div className='relative w-full mx-auto overflow-hidden'>
        <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${state * 100}%)` }}>
          <div className='flex-none w-full h-full flex items-center justify-center'>
            <Component1 />
          </div>
          <div className='flex-none w-full h-full flex items-center justify-center'>
            <Component2 />
          </div>
        </div>
      </div>
    </div>
  );
};
