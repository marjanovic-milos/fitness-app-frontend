"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authMe, signOut } from "../utils/auth";

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

  return <>{children}</>;
};

export default PageGuard;
