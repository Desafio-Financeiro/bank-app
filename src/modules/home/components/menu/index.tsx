import { Box } from "@mui/material";
import { styles } from "./styles";
import MenuItems from "../menu-items";

export default function MenuComponent() {
  return (
    <Box sx={styles.menu}>
      <MenuItems />
    </Box>
  );
}
