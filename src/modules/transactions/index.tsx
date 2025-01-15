
import { Card } from "fiap-financeiro-ds";
import { TableData } from "./components/table-data";
import type { Transaction } from "@/types/transaction";
import { useRecoilValue } from "recoil";
import { transactionsState } from "@/recoil/atoms/transactionsAtom";

function createData({ id, accountId, type, value, date }: Transaction) {
  return { id, accountId, type, value, date };
}

export function Transactions() {
  const transactions = useRecoilValue(transactionsState);

  const rows = transactions.map((d: Transaction) => createData(d));

  return (
    <Card
      type="default"
      sx={{
        flex: 1,
        overflow: "auto",
        minHeight: "calc(100vh - 144px)",
      }}
    >
      {rows.length > 0 ? (
        <TableData data={rows} />
      ) : (
        <span>Não foram encontradas transações para essa conta</span>
      )}
    </Card>
  );
}
