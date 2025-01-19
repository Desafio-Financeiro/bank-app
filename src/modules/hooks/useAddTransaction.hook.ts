import { ToastProps } from "fiap-financeiro-ds/dist/toast";
import { createTransactionRequest } from "@/services/transaction";
import type { TransactionTypes } from "@/types/transaction";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

interface CreateTransactionPayload {
  accountId: string;
  transactionType?: TransactionTypes;
  value: string | number;
}

export const useAddTransaction = () => {
  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/account/transaction", createTransactionRequest);

  const [toastProps, setToastProps] = useState<Omit<ToastProps, "handleClose">>(
    {
      type: "info",
      content: "",
      isOpen: false,
    }
  );

  const createTransaction = async ({
    accountId,
    transactionType = "Credit",
    value,
  }: CreateTransactionPayload) => {
    try {
      await createTransactionMutation({
        data: {
          accountId,
          value: Number(value),
          type: transactionType,
        },
        headers: {
          // Authorization: `Bearer ${cookies.userToken}`,
        },
      });

      // getAccount();

      setToastProps({
        type: "success",
        content: "Transação criada com sucesso!",
        isOpen: true,
      });
    } catch (e) {
      console.error(e);
      setToastProps({
        type: "error",
        content: "Erro ao criar transação.",
        isOpen: true,
      });
    }
  };

  return {
    createTransaction,
    isLoading: createTransactionIsMutating,
    toastProps,
    setToastProps,
  };
};
