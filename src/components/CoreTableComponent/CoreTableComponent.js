import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreTable from "../CoreTable/CoreTable";
import HeaderTableComponent from "./HeaderTableComponent/HeaderTableComponent";
import CorePagination from "../CorePagination/CorePagination";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const CoreTableComponent = (props) => {
  const {
    columns,
    queryFn,
    queryKey,
    deleteFn,
    createFn,
    updateFn,
    heading,
    buttonText,
    icon,
    createForm: RightSide,
  } = props;

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
  const [createFormState, setCreateForm] = useState(false);

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
  console.log("data", data);

  const deleteMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Successfully deleted!");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Successfully updated!");
    },
  });

  const createMutation = useMutation({
    mutationKey: [queryKey],
    mutationFn: createFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success("Successfully created!");
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      toast.error("Something went wrong!");
    },
  });

  const handlePageChange = (page) => setPage(page);
  const handleForm = () => setCreateForm(!createFormState);

  const sortingHandler = ({ column, sort: localSort }) =>
    setSort({ ...sort, [column]: localSort });

  return (
    <div
      className={`xl:grid  ${
        createFormState ? "grid-cols-[4fr_1fr]" : "grid-cols-1fr"
      }  gap-4 flex flex-col-reverse h-full`}
    >
      <CoreCard>
        <div className="p-6">
          <HeaderTableComponent
            setCreateForm={handleForm}
            heading={heading}
            button={buttonText}
            icon={icon}
          />
          <div className="flex flex-col">
            <CoreTable
              loading={loading || isRefetching}
              columns={columns}
              data={data?.data || data}
              deleteMutation={deleteMutation}
              updateMutation={updateMutation}
              sortingHandler={sortingHandler}
              className={{
                header: `lg:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] w-full`,
              }}
            />
            <CorePagination
              handleChange={handlePageChange}
              page={page}
              limit={limit}
              totalPages={data?.totalPages}
            />
          </div>
        </div>
      </CoreCard>
      {createFormState && (
        <RightSide handleCreateForm={handleForm} createFn={createMutation} />
      )}
    </div>
  );
};

export default CoreTableComponent;
