import http from "../http";

export const makeLogin = async ({ data }) => {
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
