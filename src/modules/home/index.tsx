import styles from "./styles";
import { Box } from "@mui/material";
import { NewTransactionCard, WelcomeCard } from "@/modules/home/components";
import { Extract } from "@/modules/extract";
import { lazy, Suspense, useEffect, useState } from "react";
const Transactions = lazy(() => import("transactionsApp/Transactions"));

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
            <Transactions
              list={[
                {
                  id: "1",
                  accountId: "A001",
                  type: "Debit",
                  value: 150.5,
                  date: new Date("2025-01-10T10:30:00"),
                },
                {
                  id: "2",
                  accountId: "A002",
                  type: "Credit",
                  value: 300.0,
                  date: new Date("2025-01-11T14:45:00"),
                },
                {
                  id: "3",
                  accountId: "A003",
                  type: "Debit",
                  value: 75.25,
                  date: new Date("2025-01-12T09:15:00"),
                },
                {
                  id: "4",
                  accountId: "A001",
                  type: "Credit",
                  value: 500.0,
                  date: new Date("2025-01-13T16:00:00"),
                },
              ]}
            />
          </Suspense>
        )}
      </Box>
      <Extract />
    </Box>
  );
}
