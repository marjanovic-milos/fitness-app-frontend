import React, { Children, useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreSwitch from "../CoreSwitch/CoreSwitch";
import { CoreSlider } from "../CoreSlider/CoreSlider";
export const CoreSwiperCard = ({ heading, component1, component2 }) => {
  //   const [state, setState] = useState("");
  return (
    <CoreCard>
      <div className='p-5 w-md'>
        <CoreHeading type='h2' className='font-semibold'>
          {heading}
        </CoreHeading>
        <CoreSlider>
          <div className=''>{component1}</div>
          <div className=''>{component2}</div>
        </CoreSlider>
      </div>
    </CoreCard>
  );
};
