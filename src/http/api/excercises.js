import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-ownerId,-created";

export const getExcercises = asyncHandler(
  async ({ page, limit = 5, sort, skipPagination = false, ids }) => {
    const url = skipPagination
      ? `/excercises?ids=${ids}`
      : `/excercises?page=${page}&limit=${limit}&sort=${
          sort ? sort : "-name"
        }&${ignorefileds}`;

    const res = await http.get(url, {
      skipAuth: false,
    });
    return res.data;
  }
);

export const findExcercise = asyncHandler(async ({ name }) => {
  const res = await http.get(`/excercises?name=${name}&${ignorefileds}`, {
    skipAuth: false,
  });
  return res.data?.data?.map((item) => ({ id: item._id, label: item.name }));
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
