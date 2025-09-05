import React from "react";
import CoreAccordion from "src/components/CoreAccordion/CoreAccordion";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import CoreInput from "src/components/CoreInput/CoreInput";

import { useForm } from "react-hook-form";
const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="mx-10 bg-gray-600 h-full">
      {/* <CoreInput
        name={"eventName"}
        register={register}
        type="datetime-local"
        errors={errors}
      /> */}
      <CoreAccordion title="Select excercises">
        <div className="py-10 h-80">
          <CoreMultiSelect />
        </div>
      </CoreAccordion>

      <CoreAccordion title="Select meals">
        <div className="py-10 h-80">
          <CoreMultiSelect />
        </div>
      </CoreAccordion>
    </div>
  );
};

export default CreateEvent;
