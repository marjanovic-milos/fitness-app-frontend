import http from "../http";
import axios from "axios";

export const makeLogin = async ({ data }) => {
  const { email, password } = data;

  try {
    const request = await axios.post(
      "http://localhost:3001/api/v1/auth/login",
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

export const authMe = async (token) => {};
