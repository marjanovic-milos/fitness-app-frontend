"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { makeLogin } from "../utils/auth";
import { useForm } from "react-hook-form";
import styles from "./loginClient.module.css";
import CoreInput from "../components/CoreInput/CoreInput";
import CoreButton from "../components/CoreButton/CoreButton";

const ClientLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error, data } = useMutation({
    mutationFn: makeLogin,
    onSuccess: (data) => {
      // console.log("Login successful:", data.data.data.user);
      queryClient.setQueryData(["user"], data.data.data.user);
    },
  });

  const onSubmit = (data) => {
    mutate({ data });
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col xl_w-[50%] w-full  text-white"}>
          <CoreInput name='email' type='email' label='Email' {...register("email")} />
          <CoreInput classes={{ root: "mt-2" }} name='password' {...register("password")} type='password' label='Password' />
          <CoreButton classes={{ root: styles.button }}>Login</CoreButton>
        </div>
      </form>
    </div>
  );
};

export default ClientLogin;
