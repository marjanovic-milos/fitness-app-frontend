"use client";
import React, { useState } from "react";
import { CoreSwiperCard } from "src/components/CoreSwiperCard/CoreSwiperCard";
import { ChefHat, Beef } from "lucide-react";
import Spoonacular from "./spoonacular";
import CoreCard from "src/components/CoreCard/CoreCard";
import CreateYours from "./createYours";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
export const CreateMeal = () => {
  const options = [
    { value: "spoonacular", label: "Spoonacular" },
    { value: "custom", label: "Custom" },
  ];
  const [selected, setSelected] = useState("spoonacular");
  return (
    <CoreCard>
      <div className='p-6 overflow-hidden'>
        <div className='flex justify-between items-center w-full '>
          {selected === "spoonacular" ? (
            <CoreHeading type='h2' className='font-semibold' icon={ChefHat}>
              Spoonacular Recepies
            </CoreHeading>
          ) : (
            <CoreHeading type='h2' className='font-semibold' icon={Beef}>
              Create Yours
            </CoreHeading>
          )}
          <CoreDropdown options={options} value={selected} onChange={(val) => setSelected(val)} />
        </div>

        <div className='xl:w-md w-full'>{selected === "spoonacular" ? <Spoonacular /> : <CreateYours />}</div>
      </div>
    </CoreCard>
  );
};
