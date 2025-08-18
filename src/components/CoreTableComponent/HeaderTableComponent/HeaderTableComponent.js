import React from "react";
import { Plus } from "lucide-react";
import CoreHeading from "../../CoreHeading/CoreHeading";
import CoreButton from "../../CoreButton/CoreButton";

const HeaderTableComponent = (props) => {
  const { heading, button, setCreateForm, icon } = props;

  const Icon = icon;
  return (
    <div className='core-subnavigation'>
      <div className='flex items-center gap-2'>
        <div className='bg-gray-100 rounded-full p-1'>
          <Icon className='w-5 h-5' strokeWidth={2} />
        </div>
        <CoreHeading type='h2' className='font-semibold'>
          {heading}
        </CoreHeading>
      </div>
      <CoreButton onClick={setCreateForm} icon={Plus}>
        {button}
      </CoreButton>
    </div>
  );
};

export default HeaderTableComponent;
