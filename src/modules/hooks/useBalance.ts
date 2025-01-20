/* eslint-disable react-hooks/exhaustive-deps */
import { balanceState } from "@/recoil/atoms/balanceAtom";
import { balanceRequest } from "@/services/balance";
import { CustomEventsEnum } from "@/types/custom-events";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";

export function useBalance() {
  const balance = useRecoilValue(balanceState);

  const setBalance = useSetRecoilState(balanceState);

  const {
    data: balanceData,
    isLoading: balanceIsLoading,
    mutate: refetchBalance,
  } = useSWR("/balance?userId=1", balanceRequest);

  useEffect(() => {
    if (!balanceIsLoading && balanceData) {
      setBalance(balanceData.data.total);
    }
  }, [balanceData, balanceIsLoading]);

  useEffect(() => {
    document.addEventListener(CustomEventsEnum.TRANSACTION_REMOVED, () => {
      refetchBalance();
    });

    document.addEventListener(CustomEventsEnum.TRANSACTION_UPDATED, () => {
      refetchBalance();
    });

    return () => {
      document.removeEventListener(CustomEventsEnum.TRANSACTION_REMOVED, () => {
        refetchBalance();
      });

      document.removeEventListener(CustomEventsEnum.TRANSACTION_UPDATED, () => {
        refetchBalance();
      });
    };
  }, []);

  return {
    balance,
    setBalance,
    balanceIsLoading,
    refetchBalance,
  };
}
