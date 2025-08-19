import React from "react";
import CoreInput from "src/components/CoreInput/CoreInput";
import { useForm } from "react-hook-form";
import CoreText from "src/components/CoreText/CoreText";
import CoreButton from "src/components/CoreButton/CoreButton";
const CreateYours = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <form className='w-full' onSubmit={handleSubmit()}>
      <div className='flex flex-col gap-8 mt-10'>
        <CoreInput
          name='title'
          register={register}
          label='Title'
          required={{
            required: "Title protein is required.",
          }}
          errors={errors}
        />

        <CoreInput
          name='sourceUrl'
          register={register}
          label='Source Url'
          required={{
            required: "Title source url is required.",
          }}
          errors={errors}
        />
      </div>
      <div className='grid grid-cols-2 gap-8 my-8'>
        <CoreInput
          name='protein'
          register={register}
          label='Protein'
          type='number'
          required={{
            required: "Field protein is required.",
            pattern: {
              value: /^\d+$/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "Value must be greater than 0.",
            },
          }}
          errors={errors}
        />
        <CoreInput
          name='fat'
          register={register}
          label='Fat'
          type='number'
          required={{
            required: "Field fat is required.",
            pattern: {
              value: /^\d+$/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "Value must be greater than 0.",
            },
          }}
          errors={errors}
        />
      </div>

      <div className='grid grid-cols-2 gap-8 my-8'>
        <CoreInput
          name='carbs'
          register={register}
          label='Carbs'
          type='number'
          required={{
            required: "Field carbs is required.",
            pattern: {
              value: /^\d+$/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "Value must be greater than 0.",
            },
          }}
          errors={errors}
        />
        <CoreInput
          name='calories'
          register={register}
          label='Calories'
          type='number'
          required={{
            required: "Field calories is required.",
            pattern: {
              value: /^\d+$/,
              message: "This input is number only.",
            },
            min: {
              value: 1,
              message: "Value must be greater than 0.",
            },
          }}
          errors={errors}
        />
      </div>
      <CoreButton
        classes='w-full'
        // isLoading={true}
      >
        Save
      </CoreButton>
    </form>
  );
};
export default CreateYours;
