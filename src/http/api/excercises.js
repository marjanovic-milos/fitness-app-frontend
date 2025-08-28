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
  return res.data.data;
});
