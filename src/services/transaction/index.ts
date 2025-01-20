import http from "@/http";
import type { TransactionTypes } from "@/types/transaction";

export const createTransactionRequest = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      data: {
        userId: string;
        type: TransactionTypes;
        value: number;
        createdAt: string;
      };
    };
  }
) => {
  const response = await http({
    method: "post",
    url,
    data: arg.data,
  });

  return response;
};
