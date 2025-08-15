import React, { useContext, useState } from "react";
import { ThemeContext } from "src/context/theme";
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

  const { dark } = useContext(ThemeContext);

  const [actionId, setActionId] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const root = `core-table ${className?.root}`;
  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${
    className?.header
  }`;

  const headerItem = `${
    dark ? "core-table-header-item-dark" : "core-table-header-item"
  } ${className?.headerItem}`;

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
    updateMutation.mutate({ data, actionId });
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
    return (
      <CoreTableRow key={item._id} className="grid-cols-8">
        {entries.map(([key, value]) => {
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
              <div key={key} className="core-button-row-wrapper">
                <Link href={value}>
                  <LinkIcon className="w-4 h-4" strokeWidth={1.5} />
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
              required={{
                required: `Field ${key} is required.`,
                pattern: key !== "title" && {
                  value: /^\d+$/,
                  message: "This input is number only.",
                },
              }}
              errors={errors}
            />
          ) : (
            <CoreText key={key}>{value}</CoreText>
          );
        })}

        {actionId ? (
          actionId === item?._id ? (
            <div className="core-button-row-wrapper" key={item._id}>
              <button disabled={actionId !== item?._id} type="button">
                <Check
                  onClick={handleSubmit((data) => {
                    onSubmit(data);
                  })}
                  className="w-4 h-4"
                  strokeWidth={1.5}
                />
              </button>
              <button
                disabled={actionId !== item?._id}
                type="button"
                onClick={resetForm}
              >
                <CloseIcon className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          ) : null
        ) : (
          <div key={item._id} className="core-button-row-wrapper">
            <button type="button" onClick={() => setActionId(item._id)}>
              <Pencil className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => deleteMutation.mutate(item?._id)}
            >
              <Trash2 className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </CoreTableRow>
    );
  });

  return (
    <div className={root}>
      <div className={header}>
        {columns?.map((column, index) => (
          <div className="" key={index}>
            <div onClick={() => sortingHandler()} className={headerItem}>
              {column}
            </div>
          </div>
        ))}
      </div>
      <div className="core-table-body">{loading ? loader : content}</div>
    </div>
  );
};

export default CoreTable;
