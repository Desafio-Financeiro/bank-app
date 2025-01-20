import { BasicLayout } from "@/layouts/basic";
import { useBalance } from "@/modules/hooks/useBalance";
import { lazy, Suspense, useEffect, useState } from "react";

const Transactions = lazy(() => import("transactionsApp/Transactions"));

const TransactionsPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { balance } = useBalance();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Transactions balance={balance} />
        </Suspense>
      )}
    </>
  );
};

export default TransactionsPage;

TransactionsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
