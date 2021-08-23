import { useState } from "react";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/globalStyle";

import { TransactionsProvider } from "./context/transactionsContext";

import { dtMoneyService } from "./services/server";
import { NewTransactionModal } from "./components/NewTransactionModal";

dtMoneyService();

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalClose] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalClose(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalClose(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestCloseModal={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
