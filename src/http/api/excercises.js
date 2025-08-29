import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-ownerId,-created";

export const getExcercises = asyncHandler(async ({ page, limit = 5, sort }) => {
  const res = await http.get(
    `/excercises?page=${page}&limit=${limit}&sort=${
      sort ? sort : "-name"
    }&${ignorefileds}`,
    {
      skipAuth: false,
    }
  );
  return res.data;
});

export const saveExcercise = asyncHandler(async (data) => {
  const request = await http.post(
    "/excercises/addExcercise",
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});

export const updateExcercise = asyncHandler(async (params) => {
  const { data, id } = params;

  const request = await http.put(
    `/excercises/${id}`,
    {
      ...data,
    },
    {
      skipAuth: false,
    }
  );
  return request;
});

export const deleteExcercise = asyncHandler(async (id) => {
  const res = await http.delete(`/excercises/${id}`, {
    skipAuth: false,
  });
  return res.data;
});
