import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreTable from "../CoreTable/CoreTable";
import CoreSubnavigation from "../CoreSubnavigation/CoreSubnavigation";

import CorePagination from "../CorePagination/CorePagination";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const WildCard = (props) => {
  const { columns, queryFn, queryKey, deleteFn } = props;

  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const limit = 5;
  const { data, loading } = useQuery({
    queryKey: [queryKey, page, limit],
    queryFn: () => queryFn({ page, limit }),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteFn(id),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
    },
  });

  // const updateMutation = useMutation(updateFn, {
  //   onSuccess: () => {
  //     // Invalidate query to refetch fresh data after update
  //     queryClient.invalidateQueries([queryKey]);
  //   },
  // });

  const handleChange = (page) => setPage(page);

  return (
    <>
      <CoreCard>
        <div className="p-5">
          <CoreSubnavigation heading="Your Meal Plans" button="Create New" />
          <div className="flex flex-col">
            <CoreTable
              loading={loading}
              columns={columns}
              data={data?.data}
              deleteMutation={deleteMutation}
              className={{ header: `grid-cols-7` }}
            >
              {/* {data?.data?.map((meal) => (
                <CoreTableRow key={meal._id} className={`grid-cols-7`}>
                  <div className="core-center">
                    <Image
                      src={meal?.image }
                      alt="Example local image"
                      width={50}
                      height={50}
                      className="w-10 h-10 rounded-full object-cover"
                      priority
                    />
                  </div>

                  <CoreText>{meal?.title}</CoreText>
                  <CoreText>{meal?.protein || "N/A"}</CoreText>
                  <CoreText>{meal?.carbs || "N/A"}</CoreText>
                  <CoreText>{meal?.fat || "N/A"}</CoreText>
                  <CoreText>{meal?.calories || "N/A"}</CoreText>

                  <Link href={meal.sourceUrl} className="underline">
                    <LinkIcon className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </CoreTableRow>
              ))} */}
            </CoreTable>
            <CorePagination
              handleChange={handleChange}
              page={page}
              limit={limit}
              totalPages={data?.totalPages}
            />
          </div>
        </div>
      </CoreCard>
    </>
  );
};

export default WildCard;
