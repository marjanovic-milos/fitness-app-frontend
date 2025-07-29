"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authMe, signOut } from "../utils/auth";

import CoreHeader from "src/components/CoreHeader/CoreHeader";
import MobileNavigation from "src/components/MobileNavigation/MobileNavigation";

import { useRouter } from "next/navigation";
const PageGuard = (props) => {
  const queryClient = useQueryClient();

  const { children, roles } = props;
  const router = useRouter();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: authMe,
    retry: false,
    staleTime: 1000 * 60 * 5,
    onError: async (error) => {
      await signOut(queryClient.invalidateQueries({ queryKey: ["user"] }));
      console.error("Error fetching user data:", error);
    },
    onSuccess: async (data) => {
      if (!data) {
        await signOut(queryClient.invalidateQueries({ queryKey: ["user"] }));
      }
    },
    enabled: true,
  });

  if (!user) return null;

  if (!roles?.includes(user?.role)) {
    router.push("/login");
  }

  return (
    <div className='size-full xl:px-12 px-6 overflow-auto'>
      <CoreHeader />
      {children}
      <MobileNavigation />
    </div>
  );
};

export default PageGuard;
