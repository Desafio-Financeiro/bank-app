import { usePathname, useRouter } from "next/navigation";
import { Menu } from "fiap-financeiro-ds";
import { styles } from "./styles";

export default function MenuItems() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => router.push("/")}
        active={pathname === "/"}
      >
        Início
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => router.push("/transactions")}
        active={pathname === "/transactions"}
      >
        Transações
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={styles.menuItem}
        handleClick={() => router.push("/reports")}
        active={pathname === "/reports"}
      >
        Relatórios
      </Menu.MenuItem>
      <Menu.MenuItem
        sx={{
          ...styles.menuItem,
          border: "none",
        }}
        handleClick={() => router.push("/other-services")}
        active={pathname === "/other-services"}
        disabled
      >
        Outros serviços
      </Menu.MenuItem>
    </>
  );
}
