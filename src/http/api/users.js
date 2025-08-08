import http from "..";
import { asyncHandler } from "src/utils/async";

export const getUsers = asyncHandler(async () => {
  const res = await http.get("/users", {
    skipAuth: false,
  });
  return res.data.data;
});
