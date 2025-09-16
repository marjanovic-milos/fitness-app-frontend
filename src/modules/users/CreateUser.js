import React from "react";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreInput from "src/components/CoreInput/CoreInput";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";
import { Plus, FilePlus2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
const CreateUser = ({ handleCreateForm, createFn }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    createFn.mutate(data);
    handleCreateForm();
  };

  return (
    <CoreCard>
      <div className='p-6 overflow-hidden'>
        <div className='flex flex-col items-start w-full'>
          <CoreHeading type='h2' className='font-semibold' icon={FilePlus2}>
            {/* {t("excercises.createExcercise")} */}
            Add New User
          </CoreHeading>
          <CoreText className='!text-gray-500 !text-sm my-5'>
            {/* {t("excercises.descrition")} */}
            Create new user, that is non loggable
          </CoreText>

          <form onSubmit={handleSubmit(submit)} className='w-full'>
            <div className='flex flex-col gap-y-8 gap-x-5'>
              <CoreInput
                name='name'
                register={register}
                label='Name'
                // label={t("excercises.name")}
                required={{
                  required: t("meals.requiredField"),
                }}
                errors={errors}
              />
              <CoreInput
                name='email'
                register={register}
                label='Email'
                // label={t("excercises.youtubeLink")}
                required={{
                  required: t("excercises.requiredField"),
                }}
                errors={errors}
              />

              <div className='flex justify-between items-center gap-6 mt-10'>
                <CoreButton type='submit' classes='w-full !m-0'>
                  {/* {t("excercises.saveBtn")} */}
                  Save Client
                </CoreButton>

                <CoreButton type='button' onClick={() => handleCreateForm()} classes='w-full !m-0' variant='outline'>
                  {/* {t("excercises.cancelBtn")} */}
                  Cancel
                </CoreButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </CoreCard>
  );
};

export default CreateUser;
