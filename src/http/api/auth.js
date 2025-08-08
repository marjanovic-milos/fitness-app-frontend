import http from "..";
import { asyncHandler } from "src/utils/async";

export const signIn = asyncHandler(async ({ data }) => {
  const { email, password } = data;
  const request = await http.post(
    "/auth/login",
    {
      email,
      password,
    },
    {
      skipAuth: true,
    }
  );
  localStorage.setItem("token", request.data.token);
  return request;
});

export const authMe = asyncHandler(async () => {
  const res = await http.get(
    "/auth/getMe",

    {
      skipAuth: false,
    }
  );
  return res.data.data;
});

export const signOut = asyncHandler(async (invalidateQuery) => {
  invalidateQuery();
  localStorage.removeItem("token");
  window.location.href = "/login";

  return await http.post("/auth/logout", {
    skipAuth: false,
  });
});
