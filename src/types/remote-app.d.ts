declare namespace JSX {
  interface IntrinsicElements {
    "app-root": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}

declare module "transactionsApp/Transactions" {
  import React from "react";

  const Transactions: React.FC<{ balance: string }>;
  export default Transactions;
}

declare module "transactionsApp/Extract" {
  import React from "react";

  const Extract: React.FC;
  export default Extract;
}

declare module "reportsApp/reportsApp" {
  const mount;
  const unmount;
  export { mount, unmount };
}
