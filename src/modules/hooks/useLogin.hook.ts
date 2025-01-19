import { userState } from "@/recoil/atoms/userAtom";
import { loginUserRequest } from "@/services/user";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

export const useLogin = () => {
  const setUser = useSetRecoilState(userState);

  const { data, isLoading } = useSWR("/user/1", loginUserRequest);

  useEffect(() => {
    if (!isLoading && data) {
      setUser(data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);
};
