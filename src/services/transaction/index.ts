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
        file?: File | null;
      };
    };
  }
) => {
  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const file = arg.data.file ? await toBase64(arg.data.file) : undefined;

  const response = await http({
    method: "post",
    url,
    data: {
      ...arg.data,
      file,
    },
  });

  return response;
};
