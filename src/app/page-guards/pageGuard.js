"use client";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authMe } from "../utils/auth";

const PageGuard = ({ children }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: authMe,
    retry: false,
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      console.error("Error fetching user data:", error);
      router.push("/login");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onSuccess: (data) => {
      if (!data) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        localStorage.removeItem("token");
        router.push("/login");
      }
    },
    enabled: true,
  });

  if (!user) return null;

  return <>{children}</>;
};

export default PageGuard;
