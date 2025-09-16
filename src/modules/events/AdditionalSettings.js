import React from "react";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import { Settings } from "lucide-react";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";
import CoreText from "src/components/CoreText/CoreText";
const AdditionalSettings = ({ control, clients }) => {
  console.log(clients, 222);
  return (
    <CoreCard>
      {!clients?.length ? (
        <div className='flex flex-col gap-5 items-start p-6'>
          <CoreHeading type='h3' className='font-semibold' icon={Settings}>
            Additional Settings
          </CoreHeading>

          <CoreText> Select days for repeated events</CoreText>

          <div className='flex xl:flex-row flex-col flex-reverse gap-4'>
            <CoreCheckbox name='repeatDays' control={control} label='Sunday' value='0' />
            <CoreCheckbox name='repeatDays' control={control} label='Monday' value='1' />
            <CoreCheckbox name='repeatDays' control={control} label='Tuesday' value='2' />{" "}
            <CoreCheckbox name='repeatDays' control={control} label='Wendsday' value='3' />{" "}
            <CoreCheckbox name='repeatDays' control={control} label='Thursday' value='4' />{" "}
            <CoreCheckbox name='repeatDays' control={control} label='Friday' value='5' />{" "}
            <CoreCheckbox name='repeatDays' control={control} label='Saturday' value='6' />
          </div>
        </div>
      ) : (
        <div>
          {clients.map((client) => (
            <CoreCheckbox key={client.id} name='user' control={control} label={client.label} value={client.id} />
          ))}
        </div>
      )}
    </CoreCard>
  );
};

export default AdditionalSettings;
