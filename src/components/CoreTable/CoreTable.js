import React, { useState } from "react";

import CoreTableRow from "./CoreTableRow";
import CoreText from "../CoreText/CoreText";
import Link from "next/link";
import {
  Link as LinkIcon,
  Trash2,
  Pencil,
  X as CloseIcon,
  Check,
} from "lucide-react";
import Image from "next/image";
import CoreInput from "../CoreInput/CoreInput";
import { useForm } from "react-hook-form";
import TableHeaders from "./TableHeaders";

import { useTranslation } from "react-i18next";
const CoreTable = (props) => {
  const {
    columns,
    className,
    loading = true,
    data,
    deleteMutation,
    updateMutation,
    sortingHandler,
  } = props;

  const { t } = useTranslation();

  const [actionId, setActionId] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const root = `core-table ${className?.root}`;

  const loader = Array.from({ length: 5 }, (_, i) => (
    <div className="my-2 px-5" key={i}>
      <div className="core-table-loader" />
    </div>
  ));

  const resetForm = () => {
    setActionId(null);
    reset();
  };
  const onSubmit = (data) => {
    updateMutation.mutate({ data, id: actionId });
    resetForm();
  };

  const content = data?.map((item) => {
    const entries = Object.entries(item).filter(([key]) => key !== "_id");
    entries.sort(([keyA], [keyB]) => {
      if (keyA === "image") return -1;
      if (keyB === "image") return 1;

      if (keyA === "sourceUrl") return 1;
      if (keyB === "sourceUrl") return -1;

      return 0;
    });

    const conditionNumbersOnly = (key) =>
      key === "carbs" ||
      key === "fat" ||
      key === "calories" ||
      key === "protein";
    return (
      <CoreTableRow
        key={item._id}
        className={`lg:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] w-full`}
      >
        {entries?.map(([key, value]) => {
          if (key === "image") {
            return (
              <div className="core-center" key={key}>
                <Image
                  src={value}
                  alt="Example local image"
                  width={50}
                  height={50}
                  className="core-table-image"
                  priority
                />
              </div>
            );
          }
          if (key === "sourceUrl") {
            return (
              <div key={key} className="core-button-row-wrapper h-full">
                <Link href={value}>
                  <LinkIcon
                    className="lg:block hidden w-4 w-4"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            );
          }
          return actionId === item?._id ? (
            <CoreInput
              value={value}
              key={key}
              name={key}
              register={register}
              fieldType="flat"
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              required={{
                required: t("validation.fieldRequired", { key }),
                pattern: conditionNumbersOnly(key) && {
                  value: /^\d+$/,
                  message: t("validation.nubmerOnly"),
                },
              }}
              errors={errors}
            />
          ) : (
            <div
              key={key}
              className="flex lg:justify-center text-sm justify-start items-center gap-1 h-full"
            >
              <CoreText className="lg:hidden block">
                {conditionNumbersOnly(key) &&
                  `${key.charAt(0).toUpperCase() + key.slice(1)} :`}
              </CoreText>{" "}
              <CoreText>{value}</CoreText>
            </div>
          );
        })}

        {actionId ? (
          actionId === item?._id ? (
            <div className="core-button-row-wrapper h-full" key={item._id}>
              <button disabled={actionId !== item?._id} type="button">
                <Check
                  onClick={handleSubmit((data) => {
                    onSubmit(data);
                  })}
                  className="core-table-confirm"
                  strokeWidth={1.5}
                />
              </button>
              <button
                disabled={actionId !== item?._id}
                type="button"
                onClick={resetForm}
              >
                <CloseIcon className="core-table-cancel" strokeWidth={1.5} />
              </button>
            </div>
          ) : null
        ) : (
          <div key={item._id} className="core-button-row-wrapper h-full">
            <button type="button" onClick={() => setActionId(item._id)}>
              <Pencil className="core-table-edit" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => deleteMutation.mutate(item?._id)}
            >
              <Trash2 className="core-table-delete" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </CoreTableRow>
    );
  });

  if (!data?.length && !loading) {
    return <p>There are no data available!</p>;
  }
  return (
    <div className={root}>
      <TableHeaders
        columns={columns}
        sortingHandler={sortingHandler}
        className={className}
      />
      <div className="core-table-body">{loading ? loader : content}</div>
    </div>
  );
};

export default CoreTable;
