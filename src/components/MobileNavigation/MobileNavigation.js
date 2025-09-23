"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Users, Dumbbell, Apple, Gauge } from "lucide-react";

import Link from "next/link";

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="core-mobile-navigation">
      <Link
        href="/trainer"
        className={`${
          pathname === "/trainer" ? "mobile-link-active" : "mobile-link"
        } `}
      >
        <Gauge className="icon" strokeWidth={1} />
      </Link>
      <Link
        href="/trainer/meal-plans"
        className={`${
          pathname === "/trainer/meal-plans"
            ? "mobile-link-active"
            : "mobile-link"
        } `}
      >
        <Apple className="icon" strokeWidth={1} />
      </Link>{" "}
      <Link
        href="/trainer/excercises"
        className={`${
          pathname === "/trainer/excercises"
            ? "mobile-link-active"
            : "mobile-link"
        } `}
      >
        <Dumbbell className="icon" strokeWidth={1} />
      </Link>{" "}
      <Link
        href="/trainer/users"
        className={`${
          pathname === "/trainer/users" ? "mobile-link-active" : "mobile-link"
        } `}
      >
        <Users className="icon" strokeWidth={1} />
      </Link>
    </div>
  );
};

export default MobileNavigation;
