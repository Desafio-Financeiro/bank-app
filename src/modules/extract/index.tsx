import { ptBR } from "date-fns/locale";
import { Card, Button, formatCurrency } from "fiap-financeiro-ds";
import { format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { statementState } from "@/recoil/atoms/statementAtom";
import { getStatementRequest } from "@/services/statement";
import { useCookies } from "react-cookie";
import { accountState } from "@/recoil/atoms/accountAtom";
import useSWRMutation from "swr/mutation";
import { groupTransactionsByMonth } from "@/modules/utils/groupTransactionsByMonth";
import type { Transaction } from "@/types/transaction";
import { transactionTypesState } from "@/recoil/atoms/transactionTypesAtom";
import { transactionsState } from "@/recoil/atoms/transactionsAtom";
import { balanceState } from "@/recoil/atoms/balanceAtom";
import { lazy, Suspense, useEffect, useState } from "react";

const operationTypeMapper = {
  Debit: "Débito",
  Credit: "Crédito",
};

export function Extract() {
  const { push } = useRouter();
  const [cookies] = useCookies(["userToken"]);
  const account = useRecoilValue(accountState);
  const statement = useRecoilValue(statementState);
  const transactionTypes = useRecoilValue(transactionTypesState);
  const setStatement = useSetRecoilState(statementState);
  const setTransactions = useSetRecoilState(transactionsState);
  const setBalance = useSetRecoilState(balanceState);

  const { data, isMutating, error, trigger } = useSWRMutation(
    {
      url: `/account/${account?.id}/statement`,
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    },
    getStatementRequest
  );

  useEffect(() => {
    if (account?.id) {
      trigger();
    }
  }, [account]);

  useEffect(() => {
    if (data) {
      const transactionsList = data.data.result.transactions;

      setTransactions(transactionsList);
      setStatement(groupTransactionsByMonth(transactionsList.slice(0, 8)));
      setBalance(
        transactionsList.reduce((acc: number, current: Transaction) => {
          return (acc += current.value);
        }, 0)
      );
    }
  }, [data]);

  if (isMutating)
    return (
      <Card type="default" sx={{ width: "282px" }}>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          Extrato
        </Typography>
        Carregando...
      </Card>
    );

  if (error)
    return (
      <Card type="default" sx={{ width: "282px" }}>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          Extrato
        </Typography>
        Erro ao carregar
      </Card>
    );

  return (
    <Card type="default" sx={{ width: "282px" }}>
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        Extrato
      </Typography>

      {(!statement || statement.length === 0) && (
        <span>Não foram encontradas transações para essa conta</span>
      )}

      {statement.map((group: any, i: number) => (
        <Box
          key={group.monthNumber + group.year + i}
          sx={{
            marginBottom: "16px",
          }}
        >
          <Typography
            color="primary.dark"
            fontWeight={600}
            textTransform="capitalize"
          >
            {ptBR.localize.month(group.monthNumber)}
          </Typography>
          <>
            {group.transactions.map((transaction: Transaction) => {
              const isTransfer = transaction.type === "Debit";

              return (
                <Stack
                  sx={{
                    marginBottom: "10px",
                    borderBottom: "1px solid",
                    borderColor: "primary.dark",
                    paddingY: "8px",
                  }}
                  key={transaction.id}
                >
                  <Stack
                    direction="row"
                    sx={{
                      marginBottom: "8px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography fontSize={13} textTransform="capitalize">
                      {operationTypeMapper[transaction.type]}
                    </Typography>
                    <Typography fontSize={13}>
                      {format(new Date(transaction.date), "dd/MM/yyyy")}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "13px",
                      color: isTransfer ? "error.main" : "success.main",
                    }}
                  >
                    R$ {formatCurrency(transaction.value.toString())}
                  </Typography>
                </Stack>
              );
            })}
          </>
        </Box>
      ))}

      {statement && statement.length > 0 && (
        <Button
          label="Ver mais"
          variant="outlined"
          color="tertiary"
          onClick={() => push("/transactions")}
        />
      )}
    </Card>
  );
}
