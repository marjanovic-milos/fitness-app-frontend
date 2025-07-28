"use client";
import React from "react";
import Link from "next/link";
import {
  Banknote,
  User,
  Dumbbell,
  Soup,
  Home,
  LayoutDashboard,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const CoreNavigation = () => {
  const { t } = useTranslation();

  return (
    <div className="core-menu">
      <img
        src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
        alt="User Profile"
        className="w-10 h-10 rounded-full  object-cover"
      />

      <div className="core-menu-links">
        <Link href="/client" className="core-menu-item">
          <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} />
          <p className="">Dashboard</p>
        </Link>
        <Link href="/client" className={"core-menu-item"}>
          <User className="w-5 h-5" strokeWidth={1.5} />
          <span className="">Users</span>{" "}
        </Link>
        <Link href="/client" className={"core-menu-item"}>
          <Dumbbell className="w-5 h-5" strokeWidth={1.5} />
          <span className="">Excercise</span>{" "}
        </Link>
        <Link href="/client" className={"core-menu-item"}>
          <Soup className="w-5 h-5" strokeWidth={1.5} />
          <span className="">Meal Plans</span>{" "}
        </Link>
        <Link href="/client" className={"core-menu-item"}>
          <Banknote className="w-5 h-5" strokeWidth={1.5} />
          <span className="">Billings</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CoreNavigation;
