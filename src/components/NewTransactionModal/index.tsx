import Modal from "react-modal";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestCloseModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestCloseModal,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestCloseModal}>
      <h2>Nova transação</h2>
    </Modal>
  );
}
