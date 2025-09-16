import http from "..";
import { asyncHandler } from "src/utils/async";

export const getEvents = asyncHandler(async (filter) => {
  const res = await http.get(`/events?dateFilter=${filter}`, {
    skipAuth: false,
  });

  return res.data.data?.map((item) => ({
    ...item,
    id: item._id,
    // title: "Some event",
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

export const updateEvent = asyncHandler(async (params) => {
  const { id, data } = params;

  const request = await http.put(
    `/events/${id}`,
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});

export const deleteEvent = asyncHandler(async (id) => {
  const res = await http.delete(`/events/${id}`, {
    skipAuth: false,
  });
  return res.data;
});
