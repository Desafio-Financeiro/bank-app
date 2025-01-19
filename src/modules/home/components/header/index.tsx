import { Header as UIHeader, Menu } from "fiap-financeiro-ds";
import MenuItems from "../menu-items";
import { useSetRecoilState } from "recoil";
import { userState } from "@/recoil/atoms/userAtom";
import { useEffect } from "react";
import useSWR from "swr";
import { loginUserRequest } from "@/services/user";
import { balanceRequest } from "@/services/balance";
import { balanceState } from "@/recoil/atoms/balanceAtom";

export default function Header() {
  const setUser = useSetRecoilState(userState);
  const setBalance = useSetRecoilState(balanceState);

  const { data: userData, isLoading: userIsLoading } = useSWR(
    "/user/1",
    loginUserRequest
  );
  const { data: balanceData, isLoading: balanceIsLoading } = useSWR(
    "/balance?userId=1",
    balanceRequest
  );

  useEffect(() => {
    if (!userIsLoading && userData) {
      setUser(userData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, userIsLoading]);

  useEffect(() => {
    if (!balanceIsLoading && balanceData) {
      setBalance(balanceData.data[0].currentAccount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balanceData, balanceIsLoading]);

  return (
    <UIHeader isLogged userName={userData?.data?.name || ""}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
