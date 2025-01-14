import { atom } from "recoil";

export const transactionTypesState = atom({
  key: "transactionTypesState",
  default: {
    values: ["Débito", "Crédito"],
    options: [
      { value: "Debit", label: "Débito" },
      { value: "Credit", label: "Crédito" },
    ],
  },
});
