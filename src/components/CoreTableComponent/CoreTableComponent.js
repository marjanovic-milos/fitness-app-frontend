import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreTable from "../CoreTable/CoreTable";
import CoreSubnavigation from "./HeaderTableComponent/HeaderTableComponent";
import { useAlert } from "src/context/alert";
import CorePagination from "../CorePagination/CorePagination";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import Spoonacular from "../SpoonacularComponent/Spoonacular";
const CoreTableComponent = (props) => {
  const {
    columns,
    queryFn,
    queryKey,
    deleteFn,
    updateFn,
    heading,
    buttonText,
  } = props;

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
  const [createForm, setCreateForm] = useState(false);
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();

  const limit = 5;
  const {
    data,
    isLoading: loading,
    isRefetching,
  } = useQuery({
    queryKey: [queryKey, page, limit, sort],
    queryFn: () =>
      queryFn({
        page,
        limit,
        sort: Object.entries(sort)
          .map(([key, value]) => `${value ? "" : "-"}${key.toLowerCase()}`)
          .join(","),
      }),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      showAlert("Succesfully deleted!");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey], exact: false });
      showAlert("Succesfully updated!");
    },
  });

  const handleChange = (page) => setPage(page);
  const handleForm = () => setCreateForm(!createForm);

  const sortingHandler = ({ column, sort: localSort }) =>
    setSort({ ...sort, [column]: localSort });

  return (
    <div
      className={`lg:grid gap-4 flex flex-col-reverse
        transition-[grid-template-columns] duration-[1500ms]
        ease-[cubic-bezier(0.77,0,0.175,1)]
        will-change-[grid-template-columns]`}
      style={{ gridTemplateColumns: createForm ? "2fr 1fr" : "1fr 0fr" }}
    >
      <CoreCard>
        <div className="p-6">
          <CoreSubnavigation
            setCreateForm={handleForm}
            heading={heading}
            button={buttonText}
          />
          <div className="flex flex-col">
            <CoreTable
              loading={loading || isRefetching}
              columns={columns}
              data={data?.data}
              deleteMutation={deleteMutation}
              updateMutation={updateMutation}
              sortingHandler={sortingHandler}
              className={{
                header: `lg:grid-cols-8 w-full`,
              }}
            />
            <CorePagination
              handleChange={handleChange}
              page={page}
              limit={limit}
              totalPages={data?.totalPages}
            />
          </div>
        </div>
      </CoreCard>
      {createForm && <Spoonacular />}
    </div>
  );
};

export default CoreTableComponent;
