import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreTable from "../CoreTable/CoreTable";
import CoreSubnavigation from "./HeaderTableComponent/HeaderTableComponent";
import { useAlert } from "src/context/alert";
import CorePagination from "../CorePagination/CorePagination";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const CoreTableComponent = (props) => {
  const { columns, queryFn, queryKey, deleteFn, updateFn } = props;

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
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

  const sortingHandler = ({ column, sort: localSort }) =>
    setSort({ ...sort, [column]: localSort });

  return (
    <CoreCard>
      <div className="p-6">
        <CoreSubnavigation heading="Your Meal Plans" button="Create New" />
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
  );
};

export default CoreTableComponent;
