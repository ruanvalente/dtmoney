import Modal from "react-modal";

import { Form } from "./styles";
import closeIcon from "../../assets/close.svg";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestCloseModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestCloseModal,
}: NewTransactionModalProps) {
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
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
