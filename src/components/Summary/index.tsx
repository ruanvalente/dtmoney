import { useContext } from "react";

import { TransactionsContext } from "../../context/transactionsContext";

import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import totalIcon from "../../assets/total.svg";

import { CardItem, Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <CardItem>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="income" />
        </header>
        <strong>R$ 17.4000,00</strong>
      </CardItem>

      <CardItem>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="outcome" />
        </header>
        <strong>-R$ 1.259,00</strong>
      </CardItem>

      <CardItem>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </CardItem>
    </Container>
  );
}
