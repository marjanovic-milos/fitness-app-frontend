import React from "react";
import CoreInput from "src/components/CoreInput/CoreInput";
import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";
import CoreTimePicker from "src/components/CoreTimePicker/CoreTimePicker";
import CoreText from "src/components/CoreText/CoreText";
import CoreCard from "src/components/CoreCard/CoreCard";
const EventDate = ({ register, control, errors }) => {
  return (
    <CoreCard>
      <div className="px-6 max-w-2xl">
        <div className="grid xl:grid-cols-3 grid-cols-auto gap-4">
          <CoreInput
            name="start"
            type="date"
            label="Date"
            register={register}
          />

          <CoreTimePicker
            label="Start"
            register={register}
            name="start"
            errors={errors}
          />
          <CoreTimePicker
            label="Finish"
            register={register}
            name="end"
            errors={errors}
          />
        </div>
        <div className="flex flex-col items-start my-10">
          <CoreText className="mb-5">Select if is repeatable: </CoreText>
          <div className="flex xl:flex-row flex-col flex-reverse gap-4">
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Sunday"
              value="0"
            />
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Monday"
              value="1"
            />
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Tuesday"
              value="2"
            />{" "}
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Wendsday"
              value="3"
            />{" "}
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Thursday"
              value="4"
            />{" "}
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Friday"
              value="5"
            />{" "}
            <CoreCheckbox
              name="preferences"
              control={control}
              label="Saturday"
              value="6"
            />
          </div>
        </div>
      </div>
    </CoreCard>
  );
};

export default EventDate;
