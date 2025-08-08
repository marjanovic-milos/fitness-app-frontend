import http from "..";

export const signIn = async ({ data }) => {
  const { email, password } = data;

  try {
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
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const authMe = async () => {
  try {
    const res = await http.get(
      "/auth/getMe",

      {
        skipAuth: false,
      }
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async (invalidateQuery) => {
  try {
    invalidateQuery();
    localStorage.removeItem("token");
    window.location.href = "/login";

    return await http.post(
      "/auth/logout",

      {
        skipAuth: false,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
