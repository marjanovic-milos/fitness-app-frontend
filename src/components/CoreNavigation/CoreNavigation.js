"use client";
import React, { useMemo, useContext } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { CLIENT_URLS, TRAINER_URLS } from "./resources";
import { ThemeContext } from "src/context/theme";

const CoreNavigation = () => {
  const { dark } = useContext(ThemeContext);
  const userData = useQuery({
    queryKey: ["user"],
    enabled: false,
    queryFn: () => null,
  });

  const resorucesData = useMemo(
    () => (userData?.data?.role === "trainer" ? TRAINER_URLS : CLIENT_URLS),
    [userData?.data?.role]
  );

  const menuItemStyle = `core-menu-item ${dark ? "core-menu-item-dark" : ""}`;

  return (
    <div className="core-menu">
      <img
        src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
        alt="User Profile"
        className="w-10 h-10 rounded-full  object-cover"
      />

      <div className="core-menu-links">
        {resorucesData?.map((item, key) => {
          const Icon = item.icon;
          return (
            <Link href={item.url} className={menuItemStyle} key={key}>
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoreNavigation;
