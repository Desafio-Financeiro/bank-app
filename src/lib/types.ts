import type { TransactionTypes } from "@/types/transaction";

export interface EditTransacao {
  id: string;
  value: number;
  type: TransactionTypes;
}
