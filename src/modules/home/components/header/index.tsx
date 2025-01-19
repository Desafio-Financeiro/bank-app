import { Header as UIHeader, Menu } from "fiap-financeiro-ds";
import MenuItems from "../menu-items";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atoms/userAtom";
import type { User } from "@/types/user";
import { useLogin } from "@/modules/hooks/useLogin.hook";
import { useAccount } from "@/modules/hooks/useAccount.hook";
import { useEffect } from "react";

export default function Header() {
  useLogin();
  const { getAccount } = useAccount();

  const user = useRecoilValue<User>(userState);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <UIHeader isLogged userName={user.name || ""}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
