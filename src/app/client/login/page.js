"use client";
import React from "react";
import CoreCard from "@/app/components/CoreCard/CoreCard";
import CoreInput from "@/app/components/CoreInput/CoreInput";
import CoreButton from "@/app/components/CoreButton/CoreButton";
import styles from "./loginClient.module.css";

const ClientLogin = () => {
  return (
    <div className={styles.root}>
      <CoreCard>
        <div className={"flex flex-col xl_w-[50%] w-full  text-white"}>
          <h1 className="text-center my-8 font-bold">Login Client</h1>
          <CoreInput name="email" type="email" label="Email" />
          <CoreInput name="password" type="password" label="Password" />
          <CoreButton classes={{ root: styles.button }}>Login</CoreButton>
        </div>
      </CoreCard>
    </div>
  );
};

export default ClientLogin;
