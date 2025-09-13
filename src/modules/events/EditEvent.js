import React, { useMemo } from "react";
import EventComponent from "./EventComponent";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals } from "src/http/api/meals";
import { getExcercises } from "src/http/api/excercises";
import { getUsers } from "src/http/api/users";
const EditEvent = ({ events, eventId }) => {
  const values = useMemo(
    () => events.find((event) => event.id === eventId),
    [events, eventId]
  );
  console.log(values);

  const { data: excercisePlans } = useQuery({
    queryKey: ["existed-excercises"],
    queryFn: () =>
      getExcercises({ ids: values?.excercisePlans, skipPagination: true }),
    enabled: !!values?.excercisePlans?.length,
  });
  const { data: mealPlans } = useQuery({
    queryKey: ["existed-meals"],
    queryFn: () =>
      getSavedMeals({ ids: values?.mealPlans, skipPagination: true }),
    enabled: !!values?.mealPlans?.length,
  });

  const { data: clients } = useQuery({
    queryKey: ["existed-clients"],
    queryFn: () => getUsers({ ids: values?.clients, skipPagination: true }),
    enabled: !!values?.clients?.length,
  });
  const event = {
    excercisePlans: excercisePlans?.data?.map((plans) => ({
      id: plans._id,
      label: plans.name,
    })),
    mealPlans: mealPlans?.data?.map((plans) => ({
      id: plans._id,
      label: plans.name,
    })),
    clients: clients?.data?.map((client) => ({
      id: client._id,
      label: client.name,
    })),
  };

  return <EventComponent event={event} />;
};

export default EditEvent;
