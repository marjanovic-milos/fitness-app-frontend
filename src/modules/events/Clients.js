import React from "react";
import CoreSearch from "src/components/CoreSearch/CoreSearch";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import { useMutation } from "@tanstack/react-query";
import { findUsers } from "src/http/api/users";

const Clients = ({ trainingOption, register, setValue }) => {
  const { mutate, data, isPending } = useMutation({
    mutationFn: (search) => findUsers({ name: search }),
  });

  return (
    <>
      <div className="w-full">
        {trainingOption?.value === "group" ? (
          <CoreMultiSelect
            placeholder="Select Users"
            delay={2000}
            loading={isPending}
            data={data}
            name={"clients"}
            searchFn={mutate}
            register={register}
            setValue={setValue}
          />
        ) : (
          <CoreSearch
            placeholder="Select User"
            delay={2000}
            loading={isPending}
            data={data}
            name={"clients"}
            searchFn={mutate}
            register={register}
            setValue={setValue}
          />
        )}
      </div>
    </>
  );
};

export default Clients;
