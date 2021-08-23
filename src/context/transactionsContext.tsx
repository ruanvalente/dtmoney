import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

import { Transaction } from "../types/transaction";

interface TransactionContextProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createaNewTransaction: (transaction: CreateaNewTransactionProps) => void;
}

type CreateaNewTransactionProps = Omit<Transaction, "id" | "createdAt">;

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionContextProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transaction")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  async function createaNewTransaction(
    transaction: CreateaNewTransactionProps
  ) {
    await api.post("transaction", transaction);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createaNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
