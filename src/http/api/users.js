import http from "..";
import { asyncHandler } from "src/utils/async";
const ignorefileds = "fields=-assignedTrainner,-role";

export const getUsers = asyncHandler(
  async ({ page, limit = 5, sort, skipPagination = false, ids }) => {
    const url = skipPagination
      ? `/users?ids=${ids}`
      : `/users?page=${page}&limit=${limit}&sort=${
          sort ? sort : "-name"
        }&${ignorefileds}`;
    const res = await http.get(url, {
      skipAuth: false,
    });
    return res.data;
  }
);

export const findUsers = asyncHandler(async ({ name }) => {
  const res = await http.get(`/users?name=${name}&${ignorefileds}`, {
    skipAuth: false,
  });
  return res.data?.data?.map((item) => ({ id: item._id, label: item.name }));
});
