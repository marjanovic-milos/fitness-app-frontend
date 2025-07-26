// import { auth } from "@services/firebase";
import { useEffect, useState } from "react";

export function useAuthUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    //   setUser(user);
    //   setIsLoading(false);
    // });

    return () => {
      //   unsubscribe();
    };
  }, []);

  return {};
}
