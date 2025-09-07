import React from "react";
import CoreSearch from "src/components/CoreSearch/CoreSearch";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import { useMutation } from "@tanstack/react-query";
import { findUsers } from "src/http/api/users";
const Users = ({ trainingOption, register }) => {
  const { mutate, data, isPending } = useMutation({
    mutationFn: (search) => findUsers({ name: search }),
  });

  return (
    <>
      <div className="w-full">
        {trainingOption?.value === "group" ? (
          <CoreMultiSelect
            placeholder="Select Users"
            loading={isPending}
            data={data}
            name={"clients"}
            searchFn={mutate}
            register={register}
          />
        ) : (
          <CoreSearch
            placeholder="Select User"
            delay={2000}
            searchFn={mutate}
            data={data}
            name={"clients"}
            loading={isPending}
            register={register}
          />
        )}
      </div>
    </>
  );
};

export default Users;
