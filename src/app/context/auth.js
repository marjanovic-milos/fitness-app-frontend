"use client";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("token");
  }, []);

  const loginUser = (data) => {
    setUser(data);
  };

  const logoutUser = () => {};

  return <AuthContext.Provider value={{ loginUser, logoutUser, user }}>{children}</AuthContext.Provider>;
};
