import http from "..";
import { asyncHandler } from "src/utils/async";

export const getEvents = asyncHandler(async (filter) => {
  const res = await http.get(`/events?dateFilter=${filter}`, {
    skipAuth: false,
  });
  return res.data.data?.map((item) => ({
    ...item,
    id: item._id,
    title: "Some event",
    start: new Date(item.start),
    end: new Date(item.end),
  }));
});

export const addEvent = asyncHandler(async (data) => {
  const res = await http.post(
    `/events/createEvent`,
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return res.data;
});

// export const findExcercise = asyncHandler(async ({ name }) => {
//   const res = await http.get(`/excercises?name=${name}&${ignorefileds}`, {
//     skipAuth: false,
//   });
//   return res.data?.data?.map((item) => ({ id: item._id, label: item.name }));
// });

// export const saveExcercise = asyncHandler(async (data) => {
//   const request = await http.post(
//     "/excercises/addExcercise",
//     {
//       ...data,
//     },
//     {
//       skipAuth: false,
//     }
//   );
//   return request;
// });

// export const updateExcercise = asyncHandler(async (params) => {
//   const { data, id } = params;

//   const request = await http.put(
//     `/excercises/${id}`,
//     {
//       ...data,
//     },
//     {
//       skipAuth: false,
//     }
//   );
//   return request;
// });

// export const deleteExcercise = asyncHandler(async (id) => {
//   const res = await http.delete(`/excercises/${id}`, {
//     skipAuth: false,
//   });
//   return res.data;
// });
