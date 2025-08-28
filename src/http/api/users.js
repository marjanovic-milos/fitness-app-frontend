import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-assignedTrainner,-role";

export const getUsers = asyncHandler(async ({ page, limit = 5, sort }) => {
  const res = await http.get(
    `/users?page=${page}&limit=${limit}&sort=${
      sort ? sort : "-name"
    }&${ignorefileds}`,
    {
      skipAuth: false,
    }
  );
  return res.data.data;
});
