import React, { useMemo } from "react";
import EventComponent from "./EventComponent";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals } from "src/http/api/meals";
import { getExcercises } from "src/http/api/excercises";
import { getUsers } from "src/http/api/users";
const EditEvent = ({ events, eventId }) => {
  const values = events?.find((event) => event.id === eventId);

  const { data: excercisePlans } = useQuery({
    queryKey: ["existed-excercises", values?.excercisePlans],
    queryFn: () =>
      getExcercises({ ids: values?.excercisePlans, skipPagination: true }),
    enabled: !!values?.excercisePlans?.length,
  });

  const { data: mealPlans } = useQuery({
    queryKey: ["existed-meals", values?.mealPlans],
    queryFn: () =>
      getSavedMeals({ ids: values?.mealPlans, skipPagination: true }),
    enabled: !!values?.mealPlans?.length,
  });

  const { data: clients } = useQuery({
    queryKey: ["existed-clients", values?.clients],
    queryFn: () => getUsers({ ids: values?.clients, skipPagination: true }),
    enabled: !!values?.clients?.length,
  });

  const event = {
    excercisePlans:
      excercisePlans?.data?.map((plans) => ({
        id: plans._id,
        label: plans.name,
      })) || [],
    mealPlans:
      mealPlans?.data?.map((plans) => ({
        id: plans._id,
        label: plans.title,
      })) || [],
    clients:
      clients?.data?.map((client) => ({
        id: client._id,
        label: client.name,
      })) || [],
    start: values?.start,
    end: values?.end,
    repeatDays: values?.repeatDays,
    id: values?._id,
  };

  return <EventComponent event={event} modalName={"edit-event"} />;
};

export default EditEvent;
