import CoreInput from "src/components/CoreInput/CoreInput";
import CoreButton from "src/components/CoreButton/CoreButton";
import { useTranslation } from "react-i18next";
import { useModals } from "src/context/modal";
import { Save, X } from "lucide-react";
export const SpoonacularForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  // cancelForm,
}) => {
  const { t } = useTranslation();
  const { toggleModal } = useModals();

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
        <CoreButton
          type="submit"
          classes="w-full !m-0"
          icon={Save}
          position="left"
        >
          {t("meals.searchBtn")}
        </CoreButton>

        <CoreButton
          type="button"
          onClick={() => toggleModal("meal-form")}
          classes="w-full !m-0"
          variant="outline"
          icon={X}
          position="left"
        >
          {t("meals.cancelBtn")}
        </CoreButton>
      </div>
    </form>
  );
};

export const CreateYourForm = ({
  createFn,
  register,
  handleSubmit,
  errors,
  // cancelForm,
}) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit((data) => createFn.mutate(data))}>
      <div className="flex flex-col gap-y-10 gap-x-5 pt-10">
        <CoreInput
          name="title"
          register={register}
          label={t("meals.title")}
          required={{
            required: t("meals.requiredField"),
          }}
          errors={errors}
        />

        <CoreInput
          name="sourceUrl"
          register={register}
          label={t("meals.sourceUrl")}
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
          label={t("meals.protein")}
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
          label={t("meals.fat")}
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
          label={t("meals.carbs")}
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
          label={t("meals.calories")}
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
        <CoreButton
          type="submit"
          classes="w-full !m-0"
          icon={Save}
          position="left"
        >
          {t("meals.saveBtn")}
        </CoreButton>

        <CoreButton
          type="button"
          onClick={() => toggleModal("meal-form")}
          classes="w-full !m-0"
          variant="outline"
          icon={X}
          position="left"
        >
          {t("meals.cancelBtn")}
        </CoreButton>
      </div>
    </form>
  );
};
