import React, { useContext, useState, useMemo } from "react";
import { ThemeContext } from "src/context/theme";
import CoreTableRow from "./CoreTableRow";
import CoreText from "../CoreText/CoreText";
import Link from "next/link";
import { Link as LinkIcon, Trash2, Pencil } from "lucide-react";
import Image from "next/image";
import CoreInput from "../CoreInput/CoreInput";
import { useForm } from "react-hook-form";
const CoreTable = (props) => {
  const { columns, className, loading = true, sortingHandler, data, deleteMutation, updateMutation } = props;

  const { dark } = useContext(ThemeContext);

  const [actionId, setActionId] = useState();
  const { register, handleSubmit } = useForm();

  const root = `core-table ${className?.root}`;
  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${className?.header}`;
  const headerItem = `${dark ? "core-table-header-item-dark" : "core-table-header-item"} ${className?.headerItem}`;

  const loader = Array.from({ length: 5 }, (_, i) => (
    <div className='my-2 px-5' key={i}>
      <div className='core-table-loader' />
    </div>
  ));
  const onSubmit = (data) => {
    console.log(actionId);
    updateMutation.mutate({ data, actionId });
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
      <CoreTableRow handleSubmit={handleSubmit} onSubmit={onSubmit} key={item._id} className='grid-cols-7'>
        {entries.map(([key, value]) => {
          if (key === "image") {
            return (
              <div className='core-center' key={key}>
                <Image src={value} alt='Example local image' width={50} height={50} className='w-10 h-10 rounded-full object-cover' priority />
              </div>
            );
          }
          if (key === "sourceUrl") {
            return actionId ? (
              <div className='flex items-center'>
                <button type='submit'>Confirm</button>;<button onClick={() => setActionId(null)}>Cancel</button>
              </div>
            ) : (
              <div key={key} className='flex justify-end items-center px-10 gap-3'>
                <Link href={value}>
                  <LinkIcon className='w-4 h-4' strokeWidth={1.5} />
                </Link>
                <Pencil onClick={() => setActionId(item._id)} className='w-4 h-4' strokeWidth={1.5} />
                <Trash2 onClick={() => deleteMutation.mutate(item?._id)} className='w-4 h-4' strokeWidth={1.5} />
              </div>
            );
          }
          return actionId === item?._id ? (
            <CoreInput value={value} key={key} name={key} register={register} fieldType='flat' />
          ) : (
            <CoreText key={key}>{value}</CoreText>
          );
        })}
      </CoreTableRow>
    );
  });

  return (
    <div className={root}>
      <div className={header}>
        {columns?.map((column, index) => (
          <div className='' key={index}>
            <div onClick={() => sortingHandler()} className={headerItem}>
              {column}
            </div>
          </div>
        ))}
      </div>
      <div className='core-table-body'>{loading ? loader : content}</div>
    </div>
  );
};

export default CoreTable;
