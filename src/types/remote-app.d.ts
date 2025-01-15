declare module "transactionsApp/Transactions" {
  import React from "react";

  interface TransactionsProps {
    list: [];
  }

  const Transactions: React.FC<TransactionsProps>;
  export default Transactions;
}

declare module "transactionsApp/Extract" {
  import React from "react";

  interface ExtractProps {
    list: [];
  }

  const Extract: React.FC<ExtractProps>;
  export default Extract;
}
