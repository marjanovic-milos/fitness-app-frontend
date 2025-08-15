import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreTable from "../CoreTable/CoreTable";
import CoreSubnavigation from "../CoreSubnavigation/CoreSubnavigation";

import CorePagination from "../CorePagination/CorePagination";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const WildCard = (props) => {
  const { columns, queryFn, queryKey, deleteFn, updateFn } = props;

  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const limit = 5;
  const {
    data,
    isLoading: loading,
    isRefetching,
  } = useQuery({
    queryKey: [queryKey, page, limit],
    queryFn: () => queryFn({ page, limit }),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey], exact: false });
    },
  });

  const handleChange = (page) => setPage(page);

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
            className={{ header: `grid-cols-8` }}
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

export default WildCard;
