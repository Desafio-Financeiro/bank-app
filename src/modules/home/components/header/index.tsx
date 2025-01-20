import { Header as UIHeader, Menu } from "fiap-financeiro-ds";
import MenuItems from "../menu-items";

import { useUser } from "@/modules/hooks/useUser";

export default function Header() {
  const { user } = useUser();

  return (
    <UIHeader isLogged userName={user.name || ""}>
      <Menu variant="compact" iconColor="secondary">
        <MenuItems />
      </Menu>
    </UIHeader>
  );
}
