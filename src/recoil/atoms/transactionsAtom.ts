import type { Transaction } from "@/types/transaction";
import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: [] as Transaction[],
});
