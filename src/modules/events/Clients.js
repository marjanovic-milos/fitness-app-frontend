import React from "react";
import CoreSearch from "src/components/CoreSearch/CoreSearch";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import { useMutation } from "@tanstack/react-query";
import { findUsers } from "src/http/api/users";

const Clients = ({ trainingOption, register, setValue, defaultOptions }) => {
  const { mutate, data, isPending } = useMutation({
    mutationFn: (search) => findUsers({ name: search }),
  });

  return (
    <>
      <div className='w-full'>
        {trainingOption ? (
          <CoreMultiSelect
            placeholder='Select Users'
            delay={2000}
            loading={isPending}
            data={data}
            name={"clients"}
            searchFn={mutate}
            register={register}
            setValue={setValue}
            defaultOptions={defaultOptions}
          />
        ) : (
          <CoreSearch
            placeholder='Select User'
            delay={2000}
            loading={isPending}
            data={data}
            name={"clients"}
            searchFn={mutate}
            register={register}
            setValue={setValue}
            defaultValue={defaultOptions}
          />
        )}
      </div>
    </>
  );
};

export default Clients;
