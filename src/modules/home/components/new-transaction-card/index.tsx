import { Box } from "@mui/material";
import { Card, Illustration, Toast } from "fiap-financeiro-ds";

import { useEffect, useState } from "react";
import styles from "./styles";
import { TransactionForm } from "@/modules/components/transaction-form";
import { useAddTransaction } from "@/modules/hooks/useAddTransaction.hook";
import { TransactionTypes } from "@/types/transaction";
import { useRecoilValue } from "recoil";
import { accountState } from "@/recoil/atoms/accountAtom";
import { CustomEventsEnum } from "@/types/custom-events";

export default function NewTransactionCard() {
  const [value, setValue] = useState<string>("0");
  const [transactionType, setTransactionType] = useState<TransactionTypes>();

  const account = useRecoilValue(accountState);

  const { createTransaction, isLoading, toastProps, setToastProps } =
    useAddTransaction();

  useEffect(() => {
    if (toastProps.type === "success") {
      setValue("0");
      setTransactionType(undefined);
    }
  }, [toastProps]);

  const handleCreateTransaction = () => {
    createTransaction({ accountId: account.id, transactionType, value });
    const transactionCreated = new CustomEvent(
      CustomEventsEnum.TRANSACTION_CREATED
    );
    document.dispatchEvent(transactionCreated);
  };

  return (
    <>
      <Toast
        {...toastProps}
        handleClose={() => {
          setToastProps({ ...toastProps, isOpen: false });
        }}
      />
      <Card type="secondary" sx={styles.card} title="Nova transação">
        <Box sx={styles.pixelsTop}>
          <Illustration name="pixelsTopMedium" />
        </Box>

        <TransactionForm
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          value={value}
          setValue={setValue}
          isMutating={isLoading}
          onSubmit={handleCreateTransaction}
        />

        <Box sx={styles.pixelsBottom}>
          <Illustration name="pixelsBottomMedium" />
        </Box>
      </Card>{" "}
    </>
  );
}
