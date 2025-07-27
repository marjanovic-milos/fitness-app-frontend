"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authMe, signOut } from "../utils/auth";
import CoreHeader from "../components/CoreHeader/CoreHeader";
import CoreFooter from "../components/CoreFooter/CoreFooter";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
const PageGuard = ({ children }) => {
  const queryClient = useQueryClient();

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

  return (
    <>
      <CoreHeader />
      {children}
      <CoreFooter />
      <MobileNavigation />
    </>
  );
};

export default PageGuard;
