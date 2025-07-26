import React from "react";
import { useQuery } from "@tanstack/react-query";

const PageGuard = (props) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => null, // no actual fetch
    enabled: false, // prevent auto-fetching
  });
  const token = localStorage.getItem("token");
  if (!user && token) {
    return null;
  }

  return <div>{props.children}</div>;
};

export default PageGuard;
