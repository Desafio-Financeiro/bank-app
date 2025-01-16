import styles from "./styles";
import { Box } from "@mui/material";
import { NewTransactionCard, WelcomeCard } from "@/modules/home/components";
import { lazy, Suspense, useEffect, useState } from "react";
const Transactions = lazy(() => import("transactionsApp/Transactions"));
const Extract = lazy(() => import("transactionsApp/Extract"));

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={styles.content}>
      <Box sx={styles.cardsBox}>
        <WelcomeCard />
        <NewTransactionCard />

        {isClient && (
          <Suspense fallback={<div>Carregando...</div>}>
            <Transactions list={[]} />
          </Suspense>
        )}
      </Box>

      {isClient && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Extract />
        </Suspense>
      )}
    </Box>
  );
}
