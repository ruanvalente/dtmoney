import { useEffect, useState } from "react";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/globalStyle";

import { dtMoneyService } from "./services/server";
import { api } from "./services/api";
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

  useEffect(() => {
    api.get("transaction").then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestCloseModal={handleCloseNewTransactionModal}
      />
    </>
  );
}
