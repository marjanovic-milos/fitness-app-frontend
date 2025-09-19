import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-ownerId";

// export const getUserMemberships = asyncHandler(async (filter) => {
//   const res = await http.get(`/${filter}`, {
//     skipAuth: false,
//   });

//   return res.data;
// });

export const getUserMemberships = asyncHandler(
  async ({ page = 1, limit = 5, sort, filter }) => {
    const url = `/memberships?userId=${
      filter?.userId
    }&page=${page}&limit=${limit}&sort=${
      sort ? sort : "-createdAt"
    }&${ignorefileds}`;

    const res = await http.get(url, {
      skipAuth: false,
    });
    return res.data;
  }
);

export const createMembership = asyncHandler(async (data) => {
  const request = await http.post(
    "/memberships",
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});

// export const addEvent = asyncHandler(async (data) => {
//   const res = await http.post(
//     `/events/createEvent`,
//     {
//       ...data,
//     },
//     {
//       skipAuth: false,
//     }
//   );
//   return res.data;
// });

// export const updateEvent = asyncHandler(async (params) => {
//   const { id, data } = params;

//   const request = await http.put(
//     `/events/${id}`,
//     {
//       ...data,
//     },
//     {
//       skipAuth: false,
//     }
//   );
//   return request;
// });

// export const deleteEvent = asyncHandler(async (id) => {
//   const res = await http.delete(`/events/${id}`, {
//     skipAuth: false,
//   });
//   return res.data;
// });
