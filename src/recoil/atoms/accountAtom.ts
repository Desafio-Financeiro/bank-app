import type { Account } from "@/types/account";
import { atom } from "recoil";

export const accountState = atom({
  key: "accountState",
  default: {} as Account,
});
