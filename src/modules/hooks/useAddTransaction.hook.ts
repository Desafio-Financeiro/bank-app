import { ToastProps } from "fiap-financeiro-ds/dist/toast";
import { createTransactionRequest } from "@/services/transaction";
import type { TransactionTypes } from "@/types/transaction";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { CustomEventsEnum } from "@/types/custom-events";

interface CreateTransactionPayload {
  transactionType?: TransactionTypes;
  value: string | number;
  userId: string;
}

export const useAddTransaction = () => {
  const {
    trigger: createTransactionMutation,
    isMutating: createTransactionIsMutating,
  } = useSWRMutation("/transactions", createTransactionRequest);

  const [toastProps, setToastProps] = useState<Omit<ToastProps, "handleClose">>(
    {
      type: "info",
      content: "",
      isOpen: false,
    }
  );

  const createTransaction = async ({
    userId,
    transactionType = "deposito",
    value,
  }: CreateTransactionPayload) => {
    try {
      await createTransactionMutation({
        data: {
          userId,
          value: Number(value),
          type: transactionType,
          createdAt: new Date().toISOString(),
        },
      });

      const transactionCreated = new CustomEvent(
        CustomEventsEnum.TRANSACTION_CREATED
      );
      document.dispatchEvent(transactionCreated);

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
