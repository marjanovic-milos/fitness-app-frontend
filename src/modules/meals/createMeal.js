import React from "react";
import { CoreSwiperCard } from "src/components/CoreSwiperCard/CoreSwiperCard";
import { ChefHat, Beef } from "lucide-react";
import Spoonacular from "./spoonacular";
import CoreCard from "src/components/CoreCard/CoreCard";
import CreateYours from "./createYours";
export const createMeal = () => {
  return (
    <CoreCard>
      <div className='p-6 overflow-hidden'>
        <CoreSwiperCard
          heading1={"Spoonacular Recepies"}
          heading2={"Enter yours"}
          component1={Spoonacular}
          component2={CreateYours}
          icon1={ChefHat}
          icon2={Beef}
        />
      </div>
    </CoreCard>
  );
};
