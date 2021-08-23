import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

import { Transaction } from "../types/transaction";

interface TransactionContextProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionContextProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transaction")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
