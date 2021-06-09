import { FormEvent, useState } from "react";

import Modal from "react-modal";

import { Container, TransactionForm, TransactionButtonBox } from "./styles";

import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIon from "../../assets/outcome.svg";
import { api } from "../../services/api";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestCloseModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestCloseModal,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const transactionData = {
      title,
      value,
      category,
      type,
    };

    await api.post("transaction", transactionData);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestCloseModal}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>

      <TransactionForm onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event?.target.value))}
        />

        <Container>
          <TransactionButtonBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeIcon} alt="Entrada" />
            Entrada
          </TransactionButtonBox>

          <TransactionButtonBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeIon} alt="Saída" />
            Saída
          </TransactionButtonBox>
        </Container>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event?.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </TransactionForm>
    </Modal>
  );
}
