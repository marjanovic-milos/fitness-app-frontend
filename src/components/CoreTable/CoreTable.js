import React, { useContext, useCallback } from "react";
import { ThemeContext } from "src/context/theme";
import CoreTableRow from "./CoreTableRow";
import CoreText from "../CoreText/CoreText";
import Link from "next/link";
import { Link as LinkIcon, Trash2 } from "lucide-react";
import Image from "next/image";

const CoreTable = (props) => {
  const { columns, className, loading, sortingHandler, data, deleteMutation } =
    props;

  const { dark } = useContext(ThemeContext);

  const root = `core-table ${className?.root}`;
  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${
    className?.header
  }`;
  const headerItem = `${
    dark ? "core-table-header-item-dark" : "core-table-header-item"
  } ${className?.headerItem}`;

  const loader = Array.from({ length: 5 }, (_, i) => (
    <tr className="my-5" key={i}>
      <td className="core-table-loader" />
    </tr>
  ));

  return (
    <>
      <table className={root}>
        <thead className={header}>
          {columns?.map((column, index) => (
            <tr className="" key={index}>
              <th onClick={() => sortingHandler()} className={headerItem}>
                {column}
              </th>
            </tr>
          ))}
        </thead>
        <tbody className="core-table-body">
          {data?.map((item) => {
            const entries = Object.entries(item).filter(
              ([key]) => key !== "_id"
            );

            entries.sort(([keyA], [keyB]) => {
              if (keyA === "image") return -1;
              if (keyB === "image") return 1;

              if (keyA === "sourceUrl") return 1;
              if (keyB === "sourceUrl") return -1;

              return 0;
            });
            return (
              <CoreTableRow key={item._id} className="grid-cols-7">
                {entries.map(([key, value]) => {
                  if (key === "image") {
                    return (
                      <div className="core-center" key={key}>
                        <Image
                          src={value}
                          alt="Example local image"
                          width={50}
                          height={50}
                          className="w-10 h-10 rounded-full object-cover"
                          priority
                        />
                      </div>
                    );
                  }
                  if (key === "sourceUrl") {
                    return (
                      <div className="core-center gap-3">
                        <Link href={value}>
                          <LinkIcon className="w-4 h-4" strokeWidth={1.5} />
                        </Link>

                        <Trash2
                          onClick={() => deleteMutation.mutate(item?._id)}
                          className="w-4 h-4"
                          strokeWidth={1.5}
                        />
                      </div>
                    );
                  }
                  return <CoreText key={key}>{value}</CoreText>;
                })}
              </CoreTableRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoreTable;
