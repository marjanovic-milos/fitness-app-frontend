"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn } from "../../http/api/auth";
import { useForm } from "react-hook-form";
import styles from "./loginClient.module.css";
import CoreInput from "src/components/CoreInput/CoreInput";

import CoreButton from "src/components/CoreButton/CoreButton";
import { useRouter } from "next/navigation";

import CoreText from "src/components/CoreText/CoreText";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import { useTranslation } from "react-i18next";
import Link from "next/link";
const ClientLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const router = useRouter();
  const { t } = useTranslation();

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

  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <div className={styles.formWrap}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <CoreHeading variant="h2" className="">
              {t("pages.welcome")}
            </CoreHeading>
            <CoreInput
              name="email"
              type="email"
              register={register}
              {...register("email")}
              placeholder={t("pages.email")}
            />
            <CoreInput
              classes={{ root: "mt-2" }}
              name="password"
              register={register}
              required={t("pages.passwordRequired")}
              {...register("password")}
              type="password"
              placeholder={t("pages.password")}
            />
            <CoreButton classes={"lg:w-[200px] w-full"} variant="outline">
              {t("pages.login")}
            </CoreButton>
            <div className="flex justify-center ">
              <CoreText>
                <Link
                  href="/register"
                  className="flex justify-center underline mx-2"
                >
                  {t("pages.register")}
                </Link>
              </CoreText>
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.rightSide}`}></div>
    </div>
  );
};

export default ClientLogin;
