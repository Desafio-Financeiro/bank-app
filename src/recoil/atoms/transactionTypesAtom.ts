import { atom } from "recoil";

export const transactionTypesState = atom({
  key: "transactionTypesState",
  default: {
    values: ["Débito", "Crédito"],
    options: [
      { value: "deposito", label: "Depósito" },
      { value: "saque", label: "Transferência" },
    ],
  },
});
