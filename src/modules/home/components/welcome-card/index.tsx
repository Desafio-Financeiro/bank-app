import { Box, Divider, Typography, useTheme } from "@mui/material";
import {
  Card,
  IconButton,
  Illustration,
  formatCurrency,
} from "fiap-financeiro-ds";
import { useState } from "react";
import styles from "./styles";
import { IconButtonProps } from "fiap-financeiro-ds/dist/iconButton";

import { useBalance } from "@/modules/hooks/useBalance";
import { useUser } from "@/modules/hooks/useUser";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function WelcomeCard() {
  const theme = useTheme();
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(true);
  const [balanceIcon, setBalanceIcon] =
    useState<IconButtonProps["icon"]>("mdiEye");
  const { balance } = useBalance();
  const { user } = useUser();

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedNumber = formatCurrency(balance ?? 0);

  const toggleBalanceVisibility = () => {
    setBalanceIcon(isBalanceVisible ? "mdiEyeOff" : "mdiEye");
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <Card type="primary" sx={styles.card} title={`Olá, ${user.name}! :)`}>
      <Box sx={styles.pixelsTop}>
        <Illustration name="pixelsTopLight" />
      </Box>

      <Box display="flex" sx={styles.content}>
        <Box sx={styles.today}>
          <Typography variant="caption">{capitalize(today)}</Typography>
        </Box>

        <Box sx={styles.balance}>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", gap: theme.spacing("large") }}
          >
            Saldo{" "}
            <IconButton icon={balanceIcon} onClick={toggleBalanceVisibility} />
          </Typography>

          <Divider sx={styles.divider} />

          <Typography variant="body1">Conta corrente</Typography>

          <Typography component="span" sx={styles.balanceText}>
            R$ {isBalanceVisible ? `${formattedNumber}` : "******"}
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.saveMoney}>
        <Illustration name="saveMoney" />
      </Box>

      <Box sx={styles.pixelsBottom}>
        <Illustration name="pixelsBottomLight" />
      </Box>
    </Card>
  );
}
