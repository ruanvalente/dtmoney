import { useContext } from "react";
import { TransactionsContext } from "../../context/transactionsContext";

import { formatNumber } from "../../utils/formatNumber";
import { FormatDate } from "../../utils/formatDate";

import { Container } from "./styles";

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);
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
