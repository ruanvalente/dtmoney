import { useState } from "react";

import Modal from "react-modal";

import { Container, Form, TransactionButtonBox } from "./styles";

import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIon from "../../assets/outcome.svg";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestCloseModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestCloseModal,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

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

      <Form>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

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
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
