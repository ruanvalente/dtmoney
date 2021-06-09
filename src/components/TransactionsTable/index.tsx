import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Transaction } from "../../types/transaction";

import { formatNumber } from "../../utils/formatNumber";
import { FormatDate } from "../../utils/formatDate";

export function TransactionsTable() {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transaction")
      .then((response) => setTransaction(response.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatNumber(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{FormatDate(transaction.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
