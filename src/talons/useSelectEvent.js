import { useMemo, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getExcercises } from "src/http/api/excercises";
import { getUsers } from "src/http/api/users";
import { useModals } from "src/context/modal";
import { getSavedMeals } from "src/http/api/meals";
import { deleteEvent } from "src/http/api/events";
import { updateMembership } from "src/http/api/memberships";
import { useQueryClient } from "@tanstack/react-query";
export const useSelectEvent = ({ events, eventId, reset }) => {
  const values = events?.find((event) => event.id === eventId);
  const { toggleModal } = useModals();
  const queryClient = useQueryClient();
  const [attendanceData, setAttendanceData] = useState();

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

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });

      reset();
      toggleModal("edit-event");
      toast.success("Successfully deleted!");
    },
  });

  const { mutate: updateAttendance } = useMutation({
    mutationFn: updateMembership,
    onSuccess: (data) => {
      setAttendanceData(data);
      toast.success("Successfully updated!");
    },
  });

  const onSubmit = (data) => updateAttendance(data);
  const selectedEvent = {
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

  const informationDetails = useMemo(() => {
    if (!attendanceData?.data?.data || !clients?.data) return [];
    const skippedIds = new Set(
      attendanceData?.data?.data
        .filter((d) => d?.status === "skipped")
        .map((v) => v.id)
    );
    return clients.data.filter((user) => skippedIds.has(user._id));
  }, [attendanceData, clients]);

  return {
    excercisePlans,
    informationDetails,
    onSubmit,
    selectedEvent,
    deleteMutation,
  };
};
