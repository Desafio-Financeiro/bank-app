import {
  Select,
  CurrencyInput,
  Button,
  formatCurrency,
} from "fiap-financeiro-ds";
import { Box, FormLabel, useTheme } from "@mui/material";
import { useRecoilValue } from "recoil";
import { transactionTypesState } from "@/recoil/atoms/transactionTypesAtom";
import type { TransactionTypes } from "@/types/transaction";
import { InputFile } from "../input-file";
import { Dispatch, SetStateAction } from "react";

interface TransactionFormProps {
  transactionType?: string;
  setTransactionType: (value: TransactionTypes) => void;
  value: string;
  setValue: (value: string) => void;
  isMutating: boolean;
  onSubmit: () => void;
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}

export function TransactionForm({
  transactionType,
  setTransactionType,
  value,
  setValue,
  isMutating,
  onSubmit,
  file,
  setFile,
}: TransactionFormProps) {
  const theme = useTheme();

  const transactionTypes = useRecoilValue(transactionTypesState);

  return (
    <Box display="flex" flexDirection="column" gap="32px" mt="32px">
      <Select
        label="Tipo de transação"
        value={transactionType}
        options={transactionTypes.options}
        onChange={(event) =>
          setTransactionType(event?.target.value as TransactionTypes)
        }
        placeholder="Selecione o tipo de transação"
      />

      <Box
        display="flex"
        sx={{
          flexDirection: "row",
          gap: "60px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "32px",
          },
        }}
      >
        <CurrencyInput
          label="Valor"
          defaultValue={formatCurrency(value)}
          onChange={(v) => {
            setValue(v);
          }}
          sx={{
            zIndex: 1,
            width: "inherit",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        />
      </Box>

      <Box width="280px" zIndex={1}>
        <FormLabel sx={{ color: theme.palette.primary.dark }}>
          Anexo de documentos
        </FormLabel>
        <InputFile file={file} setFile={setFile} />
      </Box>

      <Box width="250px" zIndex={1} mt="32px">
        <Button
          label="Concluir transação"
          onClick={onSubmit}
          color="tertiary"
          isLoading={isMutating}
          disabled={isMutating || !Number(value) || !transactionType}
        />
      </Box>
    </Box>
  );
}
