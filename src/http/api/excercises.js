import http from "..";
import { asyncHandler } from "src/utils/async";

export const getExcercises = asyncHandler(async (id) => {
  const res = await http.get(`/excercises/`, {
    skipAuth: false,
  });
  return res.data.data;
});
