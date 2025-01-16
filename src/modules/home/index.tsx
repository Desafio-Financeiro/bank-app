import styles from "./styles";
import { Box } from "@mui/material";
import { NewTransactionCard, WelcomeCard } from "@/modules/home/components";
import { lazy, Suspense, useEffect, useState } from "react";
import { mount } from "reportsApp/reportsApp";

const Extract = lazy(() => import("transactionsApp/Extract"));

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    mount();
  }, []);

  return (
    <Box sx={styles.content}>
      <Box sx={styles.cardsBox}>
        <NewTransactionCard />

        <app-root></app-root>
      </Box>

      {isClient && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Extract />
        </Suspense>
      )}
    </Box>
  );
}
