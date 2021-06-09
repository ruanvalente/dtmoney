import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Transaction } from "../../types/transaction";

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
              <td className={transaction.type}>R$ {transaction.value}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
