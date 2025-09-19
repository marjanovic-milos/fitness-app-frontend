import React from "react";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreInput from "src/components/CoreInput/CoreInput";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";
import CoreTimePicker from "src/components/CoreTimePicker/CoreTimePicker";
import { Plus, FilePlus2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
const Membership = ({ handleCreateForm, createFn }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);

    const details = {
      ...data,
      trainingCount: parseInt(data.trainingCount),
      userId,
    };
    createFn.mutate(details);
    // handleCreateForm();
  };

  return (
    <CoreCard>
      <div className="p-6 overflow-hidden">
        <div className="flex flex-col items-start w-full">
          <CoreHeading type="h2" className="font-semibold" icon={FilePlus2}>
            Add New Membership
          </CoreHeading>
          <CoreText className="!text-gray-500 !text-sm my-5">
            Add New Membership
          </CoreText>

          <form onSubmit={handleSubmit(submit)} className="w-full">
            <div className="flex flex-col gap-y-8 gap-x-5">
              {/* <CoreInput
                name="name"
                register={register}
                label="Name"
                required={{
                  required: t("meals.requiredField"),
                }}
                errors={errors}
              /> */}
              <CoreInput
                name="price"
                register={register}
                label="Price"
                type="number"
                errors={errors}
              />
              <CoreInput
                name="trainingCount"
                register={register}
                label="Training Count"
                type="number"
                errors={errors}
              />

              <CoreInput
                name="expiryDate"
                type="date"
                label="Expiry Date"
                register={register}
              />

              <div className="flex justify-between items-center gap-6 mt-10">
                <CoreButton type="submit" classes="w-full !m-0">
                  Save Membership
                </CoreButton>

                <CoreButton
                  type="button"
                  onClick={() => handleCreateForm()}
                  classes="w-full !m-0"
                  variant="outline"
                >
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

export default Membership;
