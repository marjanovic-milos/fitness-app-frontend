"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn } from "../../http/api/auth";
import { useForm } from "react-hook-form";
import styles from "./loginClient.module.css";
import CoreInput from "src/components/CoreInput/CoreInput";
import Image from "next/image";
import CoreButton from "src/components/CoreButton/CoreButton";
import { useRouter } from "next/navigation";
import avatar from "../.././../public/sportive.png";
import CoreText from "src/components/CoreText/CoreText";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import Link from "next/link";
const ClientLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.data.user);
      router.push("/profile");
    },
  });

  const onSubmit = (data) => {
    mutate({ data });
  };
  // console.log(errors, "errors");
  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        {/* <CoreHeading variant='h1' className='h-auto py-10 font-bold'>
          One stop shop, for all your managing!
        </CoreHeading> */}
        <Image src={avatar} alt='My Photo' width={400} height={300} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formWrap}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <CoreHeading variant='h3' className='font-bold'>
              Sign In
            </CoreHeading>
            <CoreInput name='email' type='email' label='Email' register={register} {...register("email")} />
            <CoreInput
              classes={{ root: "mt-2" }}
              name='password'
              register={register}
              required={"Password is required field"}
              {...register("password")}
              type='password'
              label='Password'
            />
            <CoreButton classes={"w-full"}>Login</CoreButton>
            <div className='flex justify-center '>
              <CoreText>
                First time here?
                <Link href='/client' className='flex justify-center underline mx-2'>
                  Register first
                </Link>
              </CoreText>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
