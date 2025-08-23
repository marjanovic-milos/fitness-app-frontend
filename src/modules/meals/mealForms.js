import CoreInput from "src/components/CoreInput/CoreInput";
import CoreButton from "src/components/CoreButton/CoreButton";

import { useTranslation } from "react-i18next";
export const SpoonacularForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  cancelForm,
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-y-10 gap-x-5">
        <CoreInput
          name="minProtein"
          register={register}
          label={t("meals.minProtein")}
          type="number"
          required={{
            required: t("meals.requiredField"),

            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
        <CoreInput
          name="maxProtein"
          register={register}
          label={t("meals.maxProtein")}
          type="number"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />

        <CoreInput
          name="minCarbs"
          register={register}
          label={t("meals.minCarbs")}
          type="number"
          required={{
            required: t("meals.requiredField"),

            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
        <CoreInput
          name="maxCarbs"
          register={register}
          label={t("meals.maxCarbs")}
          type="number"
          className="w-fit"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
      </div>

      <div className="flex justify-between items-center gap-6 mt-10">
        <CoreButton type="submit" classes="w-full !m-0">
          {t("meals.searchBtn")}
        </CoreButton>

        <CoreButton
          type="button"
          onClick={cancelForm}
          classes="w-full !m-0"
          variant="outline"
        >
          {t("meals.cancelBtn")}
        </CoreButton>
      </div>
    </form>
  );
};

export const CreateYourForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  cancelForm,
}) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-10 gap-x-5 pt-10">
        <CoreInput
          name="title"
          register={register}
          label="Title"
          required={{
            required: t("meals.requiredField"),
          }}
          errors={errors}
        />

        <CoreInput
          name="sourceUrl"
          register={register}
          label="Source Url"
          required={{
            required: t("meals.requiredField"),
          }}
          errors={errors}
        />
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-5 pt-10">
        <CoreInput
          name="protein"
          register={register}
          label="Protein"
          type="number"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
        <CoreInput
          name="fat"
          register={register}
          label="Fat"
          type="number"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />

        <CoreInput
          name="carbs"
          register={register}
          label="Carbs"
          type="number"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
        <CoreInput
          name="calories"
          register={register}
          label="Calories"
          type="number"
          required={{
            required: t("meals.requiredField"),
            pattern: {
              value: /^\d+$/,
              message: t("meals.numberOnly"),
            },
            min: {
              value: 1,
              message: t("meals.greaterThenZero"),
            },
          }}
          errors={errors}
        />
      </div>
      <div className="flex justify-between items-center gap-6 mt-10">
        <CoreButton type="submit" classes="w-full !m-0">
          {t("meals.saveBtn")}
        </CoreButton>

        <CoreButton
          type="button"
          onClick={cancelForm}
          classes="w-full !m-0"
          variant="outline"
        >
          {t("meals.cancelBtn")}
        </CoreButton>
      </div>
    </form>
  );
};
