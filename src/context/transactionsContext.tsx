import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

import { Transaction } from "../types/transaction";

interface TransactionContextProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createaNewTransaction: (
    transaction: CreateaNewTransactionProps
  ) => Promise<void>;
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
    transactionData: CreateaNewTransactionProps
  ) {
    const response = await api.post("transaction", {
      ...transactionData,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransaction([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createaNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
