import { useContext } from "react";

import { TransactionsContext } from "../../context/transactionsContext";

import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import totalIcon from "../../assets/total.svg";

import { CardItem, Container } from "./styles";

import { formatNumber } from "../../utils/formatNumber";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposit += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraw += transaction.amount;
        accumulator.total -= transaction.amount;
      }

      return accumulator;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <CardItem>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="income" />
        </header>
        <strong>{formatNumber(summary.deposit)}</strong>
      </CardItem>

      <CardItem>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="outcome" />
        </header>
        <strong>-{formatNumber(summary.withdraw)}</strong>
      </CardItem>

      <CardItem>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="total" />
        </header>
        <strong>{formatNumber(summary.total)}</strong>
      </CardItem>
    </Container>
  );
}
