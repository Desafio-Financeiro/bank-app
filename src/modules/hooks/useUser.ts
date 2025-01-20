import { userState } from "@/recoil/atoms/userAtom";
import { loginUserRequest } from "@/services/user";
import { User } from "@/types/user";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";

export function useUser() {
  const user = useRecoilValue<User>(userState);

  const setUser = useSetRecoilState(userState);

  const { data: userData, isLoading: userIsLoading } = useSWR(
    "/user/1",
    loginUserRequest
  );

  useEffect(() => {
    if (!userIsLoading && userData) {
      setUser(userData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, userIsLoading]);

  return {
    user,
  };
}
