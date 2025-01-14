import http from "@/http";
import type { TransactionTypes } from "@/types/transaction";

export const createTransactionRequest = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      data: {
        accountId: string;
        type: TransactionTypes;
        value: number;
        from?: string;
        to?: string;
        anexo?: string;
      };
      headers: any;
    };
  },
) => {
  const response = await http({
    method: "post",
    url,
    data: arg.data,
    headers: arg.headers,
  });

  return response;
};
