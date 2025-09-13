import React from "react";
import CoreInput from "src/components/CoreInput/CoreInput";
import CoreTimePicker from "src/components/CoreTimePicker/CoreTimePicker";
import CoreCard from "src/components/CoreCard/CoreCard";
import moment from "moment";
const EventDate = ({ register, errors, defaultValue }) => {
  const currerntDate = defaultValue
    ? moment(defaultValue).format("YYYY-MM-DD")
    : moment().format("YYYY-MM-DD");
  return (
    <CoreCard>
      <div className="p-6 max-w-2xl">
        <div className="grid xl:grid-cols-3 grid-cols-auto gap-4">
          <CoreInput
            name="date"
            defaultValue={currerntDate}
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
      </div>
    </CoreCard>
  );
};

export default EventDate;
