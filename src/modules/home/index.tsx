"use client";

import styles from "./styles";
import { Box } from "@mui/material";
import { NewTransactionCard, WelcomeCard } from "@/modules/home/components";
import { Extract } from "@/modules/extract";

export default function Home() {
  return <Box sx={styles.content}>
    <Box sx={styles.cardsBox}>
      <WelcomeCard />
      <NewTransactionCard />
    </Box>
    <Extract />
  </Box>;
}
