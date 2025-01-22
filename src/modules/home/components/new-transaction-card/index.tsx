import { Box } from "@mui/material";
import { Card, Illustration, Toast } from "fiap-financeiro-ds";

import { useEffect, useState } from "react";
import styles from "./styles";
import { TransactionForm } from "@/modules/components/transaction-form";
import { useAddTransaction } from "@/modules/hooks/useAddTransaction.hook";
import { TransactionTypes } from "@/types/transaction";
import { useUser } from "@/modules/hooks/useUser";

export default function NewTransactionCard() {
  const [value, setValue] = useState<string>("0");
  const [file, setFile] = useState<File | null>(null);
  const [transactionType, setTransactionType] = useState<TransactionTypes>();
  const { user } = useUser();

  const { createTransaction, isLoading, toastProps, setToastProps } =
    useAddTransaction();

  useEffect(() => {
    if (toastProps.type === "success") {
      setValue("0");
      setTransactionType(undefined);
      setFile(null);
    }
  }, [toastProps]);

  const handleCreateTransaction = () => {
    createTransaction({
      userId: user.id,
      transactionType,
      value,
      file,
    });
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
          file={file}
          setFile={setFile}
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
